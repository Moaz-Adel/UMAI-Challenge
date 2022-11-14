/// <reference types="cypress" />

import { reservationPage } from "../pages/reservations.page";

let validationTimes = ["Morning", "Afternoon", "Football Time"];

import "@cypress-audit/lighthouse/commands";

Cypress.Commands.add("pickRandomDay", (day) => {
  let date = new Date();
  day = date.getDate() + 5;
  cy.get("#um-reservation-date-picker", { timeout: 10000 }).click();
  cy.get(`[aria-label="Thursday, 17th November 2022"] > .day-content`)
    // .contains(day)
    .click();
});

Cypress.Commands.add(
  "pickRandomDayFromTenDays",
  (day: number, numberOfPeople?: number, reservationSlot?: number) => {
    if (numberOfPeople) {
      reservationPage.choosePartySize(numberOfPeople);
    }
    cy.wait(2000);
    cy.get(`:nth-child(${day}) > .um-tenDateSelector--btn`).click();
    // cy.wait(5000);
    let valueOfDay: string;
    if (reservationSlot) {
      cy.get(`:nth-child(${day}) > .um-tenDateSelector--btn`)
        .siblings("span")
        .should(($span) => {
          valueOfDay = $span.text();
          console.log("========>", valueOfDay);
        })
        .then(() => {
          if (valueOfDay == "Sun" || valueOfDay == "Sat") {
            reservationPage.Selectors.reservationTimeWeekEnd(
              reservationSlot
            ).click();
          } else {
            reservationPage.Selectors.reservationTimeWeekDay(
              reservationSlot
            ).click();
          }
        });
    }
    // for (let weekEndDay of weekEnds) {
    // if (
    //   cy
    //     .get(`:nth-child(${day}) > .um-tenDateSelector--btn`)
    //     .siblings("span")
    //     .contains("Sun") ||
    //   cy.get(`:nth-child(${day}) > .um-tenDateSelector--btn`).siblings("span")
    // ) {
    //   for (let validationTime of validationTimes) {
    //     cy.contains("h3", validationTime).should("be.visible");
    //   }
    // }
    // }
  }
);

Cypress.Commands.add("pickWeekEndDay", (day: string) => {
  // cy.get(`:nth-child(${day}) > .um-tenDateSelector--btn`).click();
  cy.wait(5000);
  // for (let weekEndDay of weekEnds) {
  cy.contains("span", "Sat" || "Sun")
    .siblings("button")
    .click();

  for (let validationTime of validationTimes) {
    cy.contains("h3", validationTime).should("be.visible");
  }
  // }
});

//Iframe Handling

Cypress.Commands.add("iframeLoaded", { prevSubject: "element" }, ($iframe) => {
  const contentWindow = $iframe.prop("contentWindow");
  return new Promise((resolve) => {
    if (contentWindow && contentWindow.document.readyState === "complete") {
      resolve(contentWindow);
    } else {
      $iframe.on("load", () => {
        resolve(contentWindow);
      });
    }
  });
});

Cypress.Commands.add(
  "getInDocument",
  { prevSubject: "document" },
  (document, selector) => Cypress.$(selector, document)
);

Cypress.Commands.add("getWithinIframe", (targetElement) =>
  cy
    .get(".__PrivateStripeElement > iframe")
    .iframeLoaded()
    .its("document")
    .getInDocument(targetElement)
);
