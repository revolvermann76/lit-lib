// const webpack = require("webpack");
const fs = require("fs");
const path = require("path");
const dir = "dist";

function copyDirectory(source, target) {
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  const files = fs.readdirSync(source);

  files.forEach((file) => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

class CopyDistToTarget {
  apply(compiler) {
    compiler.hooks.afterEmit.tap("CopyDistToTarget", (compilation) => {
      console.log("=== copy dist to target ===");
      copyDirectory("dist", "target/classes");
      console.log("\n");
    });
  }
}

module.exports = CopyDistToTarget;
