import { Helmet } from "react-helmet-async";

const StructuredData = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Shopify Heroes Agency",
    url: "https://shopifyheroesagency.com",
    logo: "https://shopifyheroesagency.com/assets/shopify_heroes.jpg",
    image: "https://shopifyheroesagency.com/assets/shopify_heroes.jpg",
    description:
      "Expert Shopify developer providing custom store setup, technical fixes, and ongoing support. Stop fighting with your theme and get back to selling.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+01330492979",
      email: "arafatinbusiness@gmail.com",
      contactType: "customer service",
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://github.com/arafatinbusiness",
    ],
    priceRange: "$350 - $1,500+",
    areaServed: "Worldwide",
    serviceType: [
      "Shopify Development",
      "Shopify Plus Development",
      "Ecommerce Development",
      "Theme Customization",
      "Shopify SEO",
      "Store Maintenance",
      "Shopify Migration",
      "CRO Audit",
    ],
    offers: [
      {
        "@type": "Offer",
        name: "Basic Maintenance",
        price: "350",
        priceCurrency: "USD",
        description: "Monthly technical health and security for your Shopify store.",
      },
      {
        "@type": "Offer",
        name: "Professional Support",
        price: "500",
        priceCurrency: "USD",
        description: "Scaling brands that need a dedicated technical partner.",
      },
      {
        "@type": "Offer",
        name: "Enterprise/Plus",
        price: "1500",
        priceCurrency: "USD",
        description: "Shopify Plus & High-Volume International stores.",
      },
    ],
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Jessica Chen" },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "The best Shopify devs we've ever hired. They fixed bugs that three other agencies couldn't figure out.",
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "David Ross" },
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        reviewBody: "Our Shopify Plus setup is now rock solid. We handled Black Friday with zero issues for the first time.",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "150",
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default StructuredData;
