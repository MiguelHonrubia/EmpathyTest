import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import dotenv from "dotenv";

const basePath = __dirname;

module.exports = ({ mode = "development" }) => {
  const currentPath = path.join(__dirname);
  const envFile =
    mode == "development" ? mode : mode == "none" ? "staging" : "production";
  const envPath = currentPath + "/.env." + envFile;
  const fileEnv = dotenv.config({ path: envPath }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    entry: path.join(basePath, "src/domain", "index.tsx"),
    output: {
      path: path.join(basePath, "dist"),
      filename: "bundle.js",
      publicPath: "/",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    mode: mode,
    devtool: mode === "development" ? "inline-source-map" : "",
    devServer: {
      port: 3000,
      open: true,
      compress: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|svg|jpg|gif|ico)$/,
          use: ["file-loader"],
        },
        {
          test: /\.(eot|woff|ttf|woff2)$/,
          use: ["url-loader"],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(basePath, "public", "index.html"),
        filename: "index.html",
      }),
      new webpack.DefinePlugin(envKeys),
    ],
  };
};
