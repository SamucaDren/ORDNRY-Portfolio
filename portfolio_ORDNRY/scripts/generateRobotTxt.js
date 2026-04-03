import fs from "fs";

const content = `
User-agent: *
Allow: /

Sitemap: https://ordnrydesign.com/sitemap.xml
`;

fs.writeFileSync("public/robots.txt", content);

console.log("robots.txt gerado com sucesso!");
