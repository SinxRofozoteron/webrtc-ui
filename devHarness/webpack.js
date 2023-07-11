const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const indexFilePath = path.resolve(__dirname, 'index.tsx');

module.exports = {
  devtool: 'eval-source-map',
  entry: indexFilePath,
  mode: 'development',
  devServer: {
    port: 3003,
    client: {
      progress: true
    },
    compress: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html')
    }),
    new ForkTsCheckerWebpackPlugin({
      logger: 'webpack-infrastructure',
      typescript: {
        configFile: path.resolve(__dirname, '..', 'tsconfig.json')
      },
      devServer: true
    })
  ],
  module: {
    rules: [
      {
        test: [/\.[jt]sx?$/],
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              plugins: ['@babel/plugin-transform-runtime'],
              presets: [
                [
                  '@babel/preset-env',
                  {
                    debug: false,
                    include: ['@babel/plugin-proposal-class-properties'],
                    targets: [],
                    useBuiltIns: 'usage'
                  }
                ],
                ['@babel/preset-react', { runtime: 'automatic' }],
                ['@babel/preset-typescript', { allowDeclareFields: true }]
              ]
            }
          }
        ],
        resolve: {
          extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
        }
      }
    ]
  }
};
