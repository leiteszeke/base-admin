import path from "path";

export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~coreui": path.resolve(__dirname, "node_modules/@coreui/coreui"),
      src: path.resolve(__dirname, "src"),
    },
  },
  define: {
    "process.env": {},
  },
  server: {
    port: 3000,
    hot: true,
  },
  build: {
    outDir: path.join(__dirname, "dist"),
  },
};
