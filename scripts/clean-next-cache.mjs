import fs from "fs";
import os from "os";
import path from "path";

const projectCache = path.join(process.cwd(), ".next");
const localCache = path.join(os.homedir(), "AppData", "Local", "jla-link-next");

for (const cacheDir of [projectCache, localCache]) {
  if (!fs.existsSync(cacheDir)) continue;

  const stat = fs.lstatSync(cacheDir);
  if (stat.isSymbolicLink()) {
    fs.unlinkSync(cacheDir);
    console.log(`Removed junction: ${cacheDir}`);
  } else {
    fs.rmSync(cacheDir, { recursive: true, force: true });
    console.log(`Removed cache: ${cacheDir}`);
  }
}

console.log("Cache cleanup complete");
