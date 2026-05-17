import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Route for Lead Management
  app.post("/api/leads", async (req, res) => {
    try {
      const lead = req.body;
      
      // 1. Simulation: Send confirmation email to user (The 'Guide' persona)
      console.log(`[EMAIL AUTOMATION] Sending to User (${lead.email}):`);
      console.log(`"Hello ${lead.name}, I'm Arafat. I've received your request for ${lead.services?.join(', ')}. Let's turn your Shopify store into a hero-grade engine."`);

      // 2. Simulation: Send notification to Admin (Arafat)
      console.log(`[ADMIN NOTIFICATION] New Lead Found!`);
      console.log(`Website: ${lead.website}`);
      console.log(`Budget: ${lead.budget}`);
      console.log(`Calendar Link: ${lead.calendarLink || 'Not provided'}`);
      console.log(`Details for Pre-Call Research: ${lead.website} needs ${lead.services?.join(', ')}.`);

      // In a real app, you'd save to Firestore here using firebase-admin
      // or call a CRM/Slack webhook.
      
      res.status(200).json({ success: true, message: "Lead processed and automations triggered." });
    } catch (error) {
      console.error("Error processing lead:", error);
      res.status(500).json({ success: false, error: "Internal Server Error" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
