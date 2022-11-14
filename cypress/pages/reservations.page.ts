/// <reference types = "cypress" />

class ReservationPage {
  Selectors = {
    dataPicker: () => "#um-reservation-date-picker",
    partySizeDropDown: () => cy.get("#um-reservation-party-size"),
    partySizeAssertion: () => cy.get(".css-ih2rla-singleValue"),
    specificDaySelection: (specificDay: string) =>
      cy
        .contains(`.um-tenDateSelector--li > span`, `${specificDay}`)
        .siblings("button"),

    datePickerDropDown: () => cy.get("#um-reservation-date-picker"),
    reservationTimeWeekDay: (slot: number) => cy.get(`#timeslot----${slot}`),
    reservationTimeWeekEnd: (slot: number) =>
      cy.get(`#timeslot-morning-${slot}`),

    //Contact details
    firstName: () => cy.get("#um-field--first-name"),
    lastName: () => cy.get("#um-field--last-name"),
    countryName: () => cy.get("[name='phoneCountry']"),
    phoneNumber: () => cy.get("#um-field--phone-number"),
    emailAddress: () => cy.get("#um-field--email"),
    specialRequest: () => cy.get("#um-field--special-request"),
    dietaryRestrictions: () => cy.contains("button", "Add"),
    //Restriction Menu
    saveRestrictionOptions: () => cy.get("#um-button-save-tags"),
    termsAndPolicyCheckBox: () => cy.get("#um-field-checkbox"),
    proceedToPaymentDetails: () =>
      cy.get("#ums-proceed-to-add-payment-details-button"),

    //Payment Details Page Selectors
    paymentDetailsIframeBody: () => cy.get("div.StripeElement > div > iframe"),
    confirmReservationBtn: () => cy.get("#ums-confirm-reservation-button"),
  };

  choosePartySize(partySize: number): void {
    this.Selectors.partySizeDropDown()
      .click()
      .contains(`${partySize} people`)
      .click();
  }

  fillContactDetailsForm(
    firstName: string,
    lastName: string,
    countryName: string,
    phoneNumber: string,
    email: string,
    specialRequest?: string,
    restrictions?: string[]
  ): void {
    this.Selectors.firstName().type(firstName);
    this.Selectors.lastName().type(lastName);
    this.Selectors.countryName().select(countryName);
    this.Selectors.phoneNumber().clear().type(phoneNumber);
    this.Selectors.emailAddress().clear().type(email);
    if (specialRequest) {
      this.Selectors.specialRequest().type(specialRequest);
    }
    if (restrictions) {
      this.Selectors.dietaryRestrictions().click();
      restrictions.forEach((item) => {
        cy.contains(`${item}`).siblings().click({ multiple: true });
      });
      this.Selectors.saveRestrictionOptions().click();
    }
    this.Selectors.termsAndPolicyCheckBox().click();
    this.Selectors.proceedToPaymentDetails().click();
  }

  fillPaymentDetails(cardNumber: number, expirationDate: number, cvc: number) {
    // cy.get(".__PrivateStripeElement > iframe").iframeLoaded().its("document");
    cy.enter(".__PrivateStripeElement > iframe").then((getBody) => {
      getBody()
        .find("#Field-numberInput")
        .should("be.visible")
        .type(cardNumber);
      getBody()
        .find("#Field-expiryInput")
        .should("be.visible")
        .type(expirationDate);
      getBody().find("#Field-cvcInput").should("be.visible").type(cvc);
    });
    this.Selectors.confirmReservationBtn().click();
  }
}

export const reservationPage = new ReservationPage();
