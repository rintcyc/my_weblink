const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      assert: 'assert',
      buffer: 'buffer',
      console: 'console-browserify',
      constants: 'constants-browserify',
      crypto: 'crypto-browserify',
      domain: 'domain-browser',
      events: 'events',
      http: 'stream-http',
      https: 'https-browserify',
      os: 'os-browserify/browser',
      path: 'path-browserify',
      punycode: 'punycode',
      process: 'process/browser',
      querystring: 'querystring-es3',
      stream: 'stream-browserify',
      _stream_duplex: 'readable-stream/duplex',
      _stream_passthrough: 'readable-stream/passthrough',
      _stream_readable: 'readable-stream/readable',
      _stream_transform: 'readable-stream/transform',
      _stream_writable: 'readable-stream/writable',
      string_decoder: 'string_decoder',
      sys: 'util',
      timers: 'timers-browserify',
      tty: 'tty-browserify',
      url: 'url',
      util: 'util',
      vm: 'vm-browserify',
      zlib: 'browserify-zlib',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.resolve(__dirname, 'build'),
    },
    compress: true,
    port: 3000,
    open: true,
  },
};
