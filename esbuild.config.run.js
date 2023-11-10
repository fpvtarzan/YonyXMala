// const esbuild = require('esbuild')

// // Automatically exclude all node_modules from the bundled version
// const { nodeExternalsPlugin } = require('esbuild-node-externals')

// esbuild.build({
//   entryPoints: ['./src/index.ts'],
//   outfile: 'www/index.js',
//   bundle: true,
//   minify: true,
//   platform: 'node',
//   sourcemap: true,
//   target: 'node14',
//   plugins: [nodeExternalsPlugin()]
// }).catch(() => process.exit(1))

import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    logLevel: "info",
    entryPoints: ["./src/index.js"],
    bundle: true,
    outfile: "www/transpiled/main.js",
    sourcemap: true,
    loader: {
      ".wgsl" : "text"
    }
  },
  { root: "www" },
);