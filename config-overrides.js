const path = require("path");

module.exports = {
  webpack: config => {
    config.resolve = {
      ...config.resolve,
      alias: {
        "~": path.resolve(__dirname, "src"),
      },
    };

    return config;
  },

  jest: config => ({
    ...config,
    moduleNameMapper: {
      axios: "axios/dist/node/axios.cjs",
      "^~(.*)$": "<rootDir>/src$1",
    },
  }),
};
