//Testataan että käyttäjä pääsee peliin

const { describe } = require("mocha");

describe("Pelitesti", () => {
  beforeEach(() => {
    cy.visit("https://brewdeck.click");
  });

  it("Testataan että päästään peliin, peli tomii ja että pelaaja voi aloittaa uuden pelin.", () => {
    cy.wait(1500);
    cy.get("button.button1").scrollIntoView();
    cy.wait(1500);
    cy.get("button.button1").click();
    cy.wait(3000);
    for (let i = 0; i <= 102; i++) {
      cy.get("canvas#canvas").click({ force: true });
    }
    cy.wait(25);
    cy.get("button.button1").scrollIntoView();
    cy.wait(1500);
    cy.get("button.button1").click();
    cy.wait(1500);
    cy.url().should("include", "https://brewdeck.click/GameOne");
    cy.wait(1500);
  });

  it("Testataan että päästään takaisin etusivulle", () => {
    cy.wait(1500);
    cy.visit("https://brewdeck.click/GameOne");
    cy.wait(5000);
    cy.get("div#exit.iconBtn.iconRight.iconRed").click();
    cy.wait(1500);
    cy.url().should("include", "https://brewdeck.click/");
    cy.wait(1000);
  });
});
