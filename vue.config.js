/**
 * @type {import("@vue/cli-service").ProjectOptions}
 */
module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.BASE_PATH,
  pages: {
    index: {
      entry: "src/main.ts",
      title: "chart-demo",
    },
  },
  devServer: {
    port: process.env.PORT,
  },
};
