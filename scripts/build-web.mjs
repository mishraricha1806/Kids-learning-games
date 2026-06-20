import { mkdir, copyFile, rm } from "node:fs/promises";

const files = [
  "index.html",
  "privacy-policy.html",
  "styles.css",
  "app.js",
  "app.webmanifest",
  "sw.js",
  "icon.svg",
  "app-ads.txt"
];

await rm("www", { recursive: true, force: true });
await mkdir("www", { recursive: true });

await Promise.all(files.map((file) => copyFile(file, `www/${file}`)));

console.log(`Copied ${files.length} files to www/`);
