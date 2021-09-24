import NextHead from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  url?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({ title, description, url, ogImage }) => {
  const joinedTitle = title ? `${title} | OSCAfrica` : "Open Source Community Africa";

  return (
    <NextHead>
      <meta charSet="UTF-8" />
      <title>{joinedTitle}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#F9AA4F" />
      <meta name="keywords" content="Job, Hire" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={joinedTitle} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@oscafrica" />
      <meta name="twitter:site" content="@oscafrica" />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={description} />
      <meta name="twitter:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <link rel="apple-touch-icon" sizes="192x192" href="/images/pwa/icons/icon-144x144.png" />
      <meta name="application-name" content="OSCAfrica" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="OSCAfrica" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />

      <meta name="msapplication-config" content="/browserconfig.xml" />
      <meta name="msapplication-TileColor" content="#F9AA4F" />
      <meta name="msapplication-tap-highlight" content="yes" />

      <link rel="shortcut icon" href="/images/osca.png" type="image/png" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#F9AA4F" />
    </NextHead>
  );
};


SEOHead.defaultProps = {
  title: "",
  description: "A community of creative minds driving the Open Source movement in Africa.",
  url: "https://oscafrica.org",
  ogImage: "https://oscafrica.org/images/seo/shareimage.jpeg"
};

export default SEOHead;
