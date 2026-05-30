import express from "express";
import { createServer } from "vite";
import path from "path";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

// Security & SEO Headers
app.use((req, res, next) => {
  // SEO-friendly headers
  res.setHeader("X-Robots-Tag", "index, follow");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "SAMEORIGIN");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  
  // Cache static assets
  if (req.path.match(/\.(jpg|jpeg|png|gif|ico|svg|webp|css|js|woff2?)$/)) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  }
  
  next();
});

async function startServer() {
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: "spa",
  });

  app.use(vite.middlewares);

  // Serve static files from public directory
  app.use(express.static(path.join(__dirname, "public"), {
    maxAge: "1y",
    immutable: true,
  }));

  // API endpoint for leads
  app.post("/api/leads", express.json(), async (req, res) => {
    try {
      const { name, email, website, budget, services, other, calendarLink } = req.body;
      
      // Log the lead (you can add email notification, Slack, etc. here)
      console.log("New lead received:", { name, email, website, budget, services, other, calendarLink });
      
      // You can add integrations here:
      // - Send email notification
      // - Post to Slack/Discord
      // - Add to CRM
      
      res.json({ success: true, message: "Lead received successfully" });
    } catch (error) {
      console.error("Error processing lead:", error);
      res.status(500).json({ success: false, message: "Internal server error" });
    }
  });

  // Health check endpoint
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // SPA fallback - serve index.html for all routes
  app.get("*", async (req, res) => {
    try {
      const url = req.originalUrl;
      
      // Read the index.html template
      let template = fs.readFileSync(
        path.resolve(__dirname, "index.html"),
        "utf-8"
      );

      // Apply Vite transforms
      template = await vite.transformIndexHtml(url, template);

      // Inject SSR meta tags based on route
      const metaTags = getMetaTagsForRoute(url);
      template = template.replace("</head>", `${metaTags}\n</head>`);

      res.status(200).set({ "Content-Type": "text/html" }).end(template);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      console.error((e as Error).stack);
      res.status(500).end((e as Error).message);
    }
  });
}

function getMetaTagsForRoute(url: string): string {
  const baseUrl = "https://shopifyheroesagency.com";
  const pathname = new URL(url, baseUrl).pathname;

  const routeMeta: Record<string, { title: string; description: string }> = {
    "/": {
      title: "Best Shopify Web Design Agency & Plus Developer | Shopify Heroes",
      description:
        "Expert Shopify developer providing custom store setup, technical fixes, and ongoing support. Stop fighting with your theme and get back to selling.",
    },
    "/blog": {
      title: "Blog - Shopify Development Insights & Ecommerce Tips",
      description:
        "Expert insights on Shopify development, ecommerce strategy, digital marketing, and technical tips to grow your online store.",
    },
    "/blog/facebook-ads-campaign-analysis": {
      title: "Facebook Ads Campaign Analysis: A Data-Driven Marketing Strategy",
      description:
        "A detailed analysis of Facebook Ads campaigns targeting Bangladesh and USA markets for accounting software, dredger business, and e-commerce software. Learn about ROI, audience targeting, and scaling strategies.",
    },
    "/terms": {
      title: "Terms and Conditions | Shopify Heroes Agency",
      description:
        "Review the terms and conditions for Shopify Heroes Agency services including payment terms, subscriptions, and legal agreements.",
    },
    "/privacy": {
      title: "Privacy Policy | Shopify Heroes Agency",
      description:
        "Learn how Shopify Heroes Agency collects, uses, and protects your personal information. Our commitment to data privacy and security.",
    },
    "/refund": {
      title: "Refund Policy | Shopify Heroes Agency",
      description:
        "Shopify Heroes Agency refund policy. Learn about our fair and transparent refund terms for project-based, retainer, and hourly services.",
    },
  };

  const meta = routeMeta[pathname] || routeMeta["/"];

  return `
    <title>${meta.title}</title>
    <meta name="description" content="${meta.description}" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:url" content="${baseUrl}${pathname}" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <link rel="canonical" href="${baseUrl}${pathname}" />
  `;
}

startServer().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
    console.log(`📈 SEO meta tags injected for all routes`);
  });
});
