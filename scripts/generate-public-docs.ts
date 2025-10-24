import swaggerJsdoc from "swagger-jsdoc";
import fs from "fs";
import path from "path";
import { publicSwaggerOptions } from "../src/config/swaggerPublicOptions";

const full = swaggerJsdoc(publicSwaggerOptions);
const filteredPaths: Record<string, any> = {};

for (const p of Object.keys(full.paths || {})) {
  const item = full.paths[p];
  if (!item?.get) continue;
  const isPost = p.includes("/moderation/post/") && p.includes("{id}");
  const isUserProfile = p.includes("/moderation/user/") && p.includes("/profile");
  if (isPost || isUserProfile) filteredPaths[p] = { get: item.get };
}

const publicSpec = {
  ...full,
  paths: filteredPaths,
  security: [],
  components: { ...(full.components || {}), securitySchemes: {} }
};

const outDir = path.resolve("./docs");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
fs.writeFileSync(path.join(outDir, "openapi.json"), JSON.stringify(publicSpec, null, 2));
console.log("Wrote docs/openapi.json (public-only)");
