//Testataan että käyttäjä pääsee peliin

const { describe } = require("mocha");

describe("Testataan että käyttäjä pääsee peliin", () => {
  beforeEach(() => {
    cy.visit("http://brewdeck.click");
  });

  it("Testataan että käyttäjä pääsee peliin", () => {
    cy.wait(1500);
    cy.get("button.button1").scrollIntoView();
    cy.wait(1500);
    cy.get("button.button1").click();
    cy.wait(5000);
    cy.get("canvas#canvas").click({ force: true });
    cy.wait(1000);
    cy.get("canvas#canvas").click({ force: true });
    cy.wait(1000);
    cy.get("canvas#canvas").click({ force: true });
  });

  beforeEach(() => {
    cy.visit("http://brewdeck.click");
  });

  it("Testataan että somelinkit toimii", () => {});
});
