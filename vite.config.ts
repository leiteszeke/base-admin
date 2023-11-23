import path from "path";

export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~coreui": path.resolve(__dirname, "node_modules/@coreui/coreui"),
      // for CoreUI PRO users
      // '~coreui': path.resolve(__dirname, 'node_modules/@coreui/coreui-pro'),
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
};
