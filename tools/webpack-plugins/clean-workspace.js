// const webpack = require("webpack");
const fs = require("fs");
const dir = "dist";

function removeDir(dir) {
  try {
    fs.accessSync(dir, fs.constants.F_OK);
    fs.rmSync(dir, { recursive: true });
    console.log(`'${dir}' deleted.`);
  } catch (error) {
    console.error(`Directory ${dir} does not exist.`);
  }
}

class CleanWorkspace {
  apply(compiler) {
    compiler.hooks.beforeRun.tap("CleanWorkspace", (compilation) => {
      console.log("=== cleaning up the workspace ===");
      removeDir(dir);
      console.log("\n");
    });
  }
}

module.exports = CleanWorkspace;
