/// <reference types="@capacitor-firebase/authentication" />

import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "ionic.cap.auth",
  appName: "ionic-cap-firebase-auth",
  webDir: "build",
  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ["apple.com", "google.com"],
    },
  },
  server: {
    androidScheme: "https",
  },
};

export default config;
