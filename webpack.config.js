const path = require("path");

const TerserPlugin = require("terser-webpack-plugin");
const webpack = require("webpack");

const CleanWorkspaceWebpackPlugin = require("./tools/webpack-plugins/clean-workspace.js");
const CopyDistToTargetPlugin = require("./tools/webpack-plugins/copy-dist-to-target.js");

const preamble = `
  Diese Datei wurde am ${new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString()} automatisch generiert.

  !!! Es ist nicht sinnvoll, diese Datei zu bearbeiten,
  !!! da sie beim nächsten Build-Prozess wieder überschrieben wird.
`;

module.exports = (env) => {
  env.mode = env.mode || "production";
  console.log("###### WebPack in '" + env.mode + "' mode #######");

  let commonConfig = {
    mode: env.mode || "production",
    optimization: {
      removeEmptyChunks: false,
      sideEffects: false,
      minimize: env.mode === "production",
      minimizer: [
        new TerserPlugin({
          extractComments: false,
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.(html|css)$/i,
          loader: "raw-loader",
        },
        {
          test: /\.(ts|js|tsx)?$/, // Alle Typescript-Dateien
          use: {
            loader: "ts-loader",
            options: {
              configFile: "tsconfig.json",
            },
          },
          exclude: /node_modules/, // Ausschluss von bestimmten Ordnern (hier: node_modules)
        },
      ],
    },
    stats: {
      // orphanModules: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    devServer: {
      contentBase: path.resolve(__dirname, "dist"), // Pfad zum Entwicklungsserver
      port: 8080, // Port für den Entwicklungsserver
    },
    devtool: "source-map",
  };

  const target1Config = Object.assign(
    {
      entry: "./src/index.ts", // Einstiegspunkt der Anwendung
      output: {
        filename: "lit-lib.js", // Name des generierten Bundles
        libraryTarget: "module",
        path: path.resolve(__dirname, "dist"), // Ausgabepfad für das kompilierte Bundle
      },
      experiments: {
        outputModule: true,
      },
      externals: {
        // "../mockdata/mockdata": "./mockdata/mockdata.js", // Beschreibung von Imports, die zur Laufzeit aufgelöst werden sollen
      },
      plugins: [
        new CleanWorkspaceWebpackPlugin(env),
        new webpack.BannerPlugin({ banner: preamble }),
      ],
    },
    commonConfig,
  );

  if (env.mode === "development") {
    target1Config.plugins.push(new CopyDistToTargetPlugin());
    target1Config.watch = true;
  }

  return [target1Config];
};