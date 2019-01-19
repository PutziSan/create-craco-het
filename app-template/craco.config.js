// https://github.com/sharegate/craco

const emotionPresetOptions = { useBuiltIns: true };

const emotionBabelPreset = require("@emotion/babel-preset-css-prop").default(
  undefined,
  emotionPresetOptions
);

const alias = {};

if (process.env.NODE_ENV === "development") {
  console.log('use alias');
  alias["react-dom"] = "@hot-loader/react-dom";
}

module.exports = {
  babel: {
    plugins: [
      ...emotionBabelPreset.plugins,
      "react-hot-loader/babel"
      // your other plugins
    ]
  },
  webpack: {
    alias
  },
  devServer: {
    hot: true
  }
};
