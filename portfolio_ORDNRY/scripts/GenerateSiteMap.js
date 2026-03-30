import { SitemapStream, streamToPromise } from "sitemap";
import { writeFileSync } from "fs";

const links = [{ url: "/" }, { url: "/front-end" }];

const stream = new SitemapStream({
  hostname: "https://ordnrydesign.com",
});

(async () => {
  try {
    links.forEach((l) => {
      stream.write({
        url: l.url.trim(),
        changefreq: "weekly",
        priority: l.url === "/" ? 1.0 : 0.8,
        lastmod: new Date().toISOString(),
      });
    });

    stream.end();

    const data = await streamToPromise(stream).then((res) => res.toString());

    writeFileSync("./public/sitemap.xml", data);

    console.log("Sitemap gerado com sucesso!");
  } catch (err) {
    console.error("Erro:", err);
  }
})();
