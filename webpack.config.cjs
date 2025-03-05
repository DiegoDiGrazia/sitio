const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/main.jsx', // Archivo de entrada principal
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash].js',
    publicPath: '/', // Asegura rutas relativas
},

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/, // Soporte para imágenes
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new CleanWebpackPlugin(), // Limpia la carpeta dist en cada build
    new HtmlWebpackPlugin({
      template: './index.html', // Archivo base HTML
      inject: true,
    }),
  ],
  devServer: {
    historyApiFallback: true, // Permite manejar rutas en una SPA
    compress: true,
    hot: true,
    port: 4000, // Puerto para el servidor de desarrollo
    
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false, // No extraer comentarios en producción
      }),
    ],
  },
  mode: "production", // Cambiar entre modos
};
