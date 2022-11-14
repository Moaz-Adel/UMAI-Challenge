describe("Performance Auditing", () => {
  it("should loads fast enough", () => {
    cy.visit("/widget/kwc-automated#reservation");
    cy.lighthouse(
      {
        performance: 60,
        accessibility: 90,
        "best-practices": 80,
        seo: 80,
      },
      {
        formFactor: "desktop",
        screenEmulation: {
          mobile: false,
          disable: false,
          width: Cypress.config("viewportWidth"),
          height: Cypress.config("viewportHeight"),
          deviceScaleRatio: 1,
        },
      }
    );
  });
});
