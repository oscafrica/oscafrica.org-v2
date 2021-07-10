const fs = require("fs");
const globby = require("globby");
const prettier = require("prettier");

(async () => {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc");

  const pages = await globby([
    "src/pages/**/*.{js,jsx,ts,tsx,mdx}", // All routes inside src/pages
    "!src/pages/**/[*.{js,jsx,ts,tsx,mdx}", // Ignore dynamic routes (e.g /pages/blog/[slug].tsx)
    "!src/pages/_*.{js,jsx,ts,tsx}", // Ignore Next.js files
    "!src/pages/api" // Ignore API routes
  ]);
  const sitemap = `
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page.replace("src/pages", "").replace(/\.[^/.]+$/, ""); // Remove "src/pages" and file extension
                const indexPath = path === "/index";
                const route = indexPath ? path.replace("/index", "/") : path;
                const changeFreq = "<changefreq>weekly</changefreq>";
                const priority = indexPath ? "<priority>1.00</priority>" : "<priority>0.80</priority>";

                return `
                        <url>
                            <loc>${`https://oscafrica.org${route}`}</loc>
                            <lastmod>${new Date().toISOString()}</lastmod>
                            ${changeFreq}
                            ${priority}
                        </url>
                    `;
              })
              .join("")}
        </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html"
  });

  fs.writeFileSync("public/sitemap.xml", formatted);
})();
