const path = require("path"); //Depedencia nativa de node
const HtmlWebpackPlugin = require("html-webpack-plugin");

const rulesForJavaScript = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
  },
};

const rulesForHtml = {
  test: /\.html$/,
  use: [
    {
      loader: "html-loader",
    },
  ],
};
const rules = [rulesForJavaScript, rulesForHtml];

module.exports = {
  //Punto de entrada de la app
  entry: "./src/index.js",
  //directorio donde se empaquetarán los archivos
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  //Extensiones que debe resolver para el paquete
  resolve: {
    extensions: [".js", ".jsx"],
  },
  //Cargando los loaders
  module: {
    rules,
  },
  //Añadir funcionalidades adicionales a webpack
  plugins: [
    // Crear automáticamente el archivo index.html en el paquete generado
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
