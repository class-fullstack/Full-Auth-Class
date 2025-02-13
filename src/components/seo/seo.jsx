import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = ({ title, description }) => {
  const siteName = "Class 02"; // Change this to your site name

  return (
    <Helmet>
      <title>{title ? `${title} | ${siteName}` : siteName}</title>
      <meta name="description" content={description || "Welcome to class 02"} />

      {/* Open Graph Meta Tags (for better social sharing) */}
      <meta
        property="og:title"
        content={title ? `${title} | ${siteName}` : siteName}
      />
      <meta
        property="og:description"
        content={description || "Welcome to class 02"}
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />

      {/* Twitter Card Meta Tags */}
      <meta
        name="twitter:title"
        content={title ? `${title} | ${siteName}` : siteName}
      />
      <meta
        name="twitter:description"
        content={description || "Welcome to class 02"}
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
};

export default SEO;
