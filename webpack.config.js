const path = require('path')
 
module.exports = {
  entry: './src/index.tsx',
  module: {
    rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
          },
        },
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
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
        assert: "assert",
        buffer: "buffer",
        console: "console-browserify",
        constants: "constants-browserify",
        crypto: "crypto-browserify",
        domain: "domain-browser",
        events: "events",
        http: "stream-http",
        https: "https-browserify",
        os: "os-browserify/browser",
        path: "path-browserify",
        punycode: "punycode",
        process: "process/browser",
        querystring: "querystring-es3",
        stream: "stream-browserify",
        _stream_duplex: "readable-stream/duplex",
        _stream_passthrough: "readable-stream/passthrough",
        _stream_readable: "readable-stream/readable",
        _stream_transform: "readable-stream/transform",
        _stream_writable: "readable-stream/writable",
        string_decoder: "string_decoder",
        sys: "util",
        timers: "timers-browserify",
        tty: "tty-browserify",
        url: "url",
        util: "util",
        vm: "vm-browserify",
        zlib: "browserify-zlib"},
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
  },
  devServer: {
    publicPath: '/build/',
    hot: true,
    open: true,
  }
}