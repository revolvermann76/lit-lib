import typescript from "@rollup/plugin-typescript";
export default {
  input: "src/my-element/my-element.ts", // Der Einstiegspunkt deiner Anwendung
  output: {
    file: "dist/bundle.js", // Die Ausgabedatei, in der dein Code gebündelt wird
    format: "esm", // Das gewünschte Ausgabeformat (umd, cjs, esm, iife)
  },
  plugins: [typescript()],
};
