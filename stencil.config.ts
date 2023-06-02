import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  outputTargets: [
    {
      type: "www",
      serviceWorker: null,
    },
  ],
  globalScript: "src/global/global.ts",
  globalStyle: "src/global/global.scss",
  enableCache: true,
  plugins: [sass()],
  devServer: {
    openBrowser: true,
  },
};
