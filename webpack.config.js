const path = require('path') // Depedencia nativa de node
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const rulesForImages = {
  test: /\.(png|gif|jpg)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: './assets/[hash].[ext]'
      }
    }

  ]
}
const rulesForStyles = {
  test: /\.(c|sc|sa)ss$/,
  use: [
    {
      loader: MiniCssExtractPlugin.loader
    },
    'css-loader',
    'sass-loader'
  ]
}
const rulesForJavaScript = {
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader'
  }
}

const rulesForHtml = {
  test: /\.html$/,
  use: [
    {
      loader: 'html-loader'
    }
  ]
}
const rules = [rulesForJavaScript, rulesForHtml, rulesForStyles, rulesForImages]

module.exports = (env, argv) => {
  // Obteniendo si el deploy es desarrollo o producción
  const { mode } = argv
  const isProduction = mode === 'production'
  return {
    // Punto de entrada de la app
    entry: './src/index.js',
    // directorio donde se empaquetarán los archivos
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: isProduction ? '[name].[contenthash].js' : 'main.js'
    },
    // Extensiones que debe resolver para el paquete
    resolve: {
      extensions: ['.js', '.jsx']
    },
    // Cargando los loaders
    module: {
      rules
    },
    // Añadir funcionalidades adicionales a webpack
    plugins: [
      // Crear automáticamente el archivo index.html en el paquete generado
      new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: isProduction
          ? './assets/[name].[contenthash].css'
          : './assets/[name].css'
      })
    ],
    // Parametros para la configuración del server de desarrollo
    devServer: {
      open: true, // Abrimos el navegador
      port: 30002
    }
  }
}
