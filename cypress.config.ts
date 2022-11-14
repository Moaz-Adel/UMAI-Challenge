const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
import { defineConfig } from "cypress";

const allureWriter = require("@shelex/cypress-allure-plugin/writer");

export default defineConfig({
  chromeWebSecurity: false,
  viewportHeight: 1080,
  videoUploadOnPasses: false,
  videoCompression: false,
  viewportWidth: 1920,
  screenshotOnRunFailure: true,
  projectId: "UAMI Challenge Project",
  retries: 0,
  defaultCommandTimeout: 20000,
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "UMAI Tests",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      allureWriter(on, config);
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });
      on("task", {
        lighthouse: lighthouse(), // calling the function is important
      });
      return config;
    },
    baseUrl: "https://gthewhite.letsumai.com",
    specPattern: "cypress/tests/**/*.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.ts",
  },
});
