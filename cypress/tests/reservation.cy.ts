///<reference types = "cypress" />

import { reservationPage } from "../pages/reservations.page";
import { faker } from "@faker-js/faker";

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const phoneNumber = faker.phone.phoneNumber("(223) ###-####");
const emailAddress = faker.internet.email();
const specialRequest = faker.random.words(20);
const countryName = "United States";

const cardNumber = "4242424242424242";
const expirationMonth = "1535";
const cvcInput = "123";

const weekEnds = ["Sat", "Sun"];

const randomWeekEndDay = weekEnds[Math.floor(Math.random() * weekEnds.length)];

describe("UMAI’s booking widget Tests", () => {
  beforeEach(() => {
    cy.visit("/widget/kwc-automated#reservation");
  });

  it("should book party for a selected number of people on a specific day", () => {
    const partySize = 5;
    cy.pickRandomDayFromTenDays(4, partySize);
    cy.get(reservationPage.Selectors.partySizeAssertion).should(
      "have.text",
      `${partySize} people`
    );
  });

  it("should displays 'Tomorrow' when selecting the next'", () => {
    cy.pickRandomDayFromTenDays(2);
    cy.get(reservationPage.Selectors.datePickerDropDown).should(
      "contains.text",
      "Tomorrow"
    );
  });

  it("should make reservation with a selection of restrictions successfully)", () => {
    cy.pickRandomDayFromTenDays(2, 5, 5);
    reservationPage.fillContactDetailsForm(
      firstName,
      lastName,
      countryName,
      phoneNumber,
      emailAddress,
      specialRequest,
      ["Halal", "No Shellfish", "No Gluten", "Vegetarian"]
    );
  });

  it("should shows Payment Method when Number of People is >=4)", () => {
    cy.pickRandomDayFromTenDays(2, 5, 3);
    reservationPage.fillContactDetailsForm(
      firstName,
      lastName,
      countryName,
      phoneNumber,
      emailAddress,
      specialRequest,
      ["Halal", "No Shellfish", "No Gluten", "Vegetarian"]
    );
    reservationPage.fillPaymentDetails(cardNumber, expirationMonth, cvcInput);
  });

  it("should reserve a weekend event)", () => {
    reservationPage.Selectors.specificDaySelection(randomWeekEndDay).click();
  });

  it("should displays days timings (Morning, Afternoon anf Football time)", () => {
    let weekEnds = ["Sat", "Sun"];
    const randomDay = Math.floor(Math.random() * weekEnds.length);
    cy.pickWeekEndDay(weekEnds[randomDay]);
  });
});
