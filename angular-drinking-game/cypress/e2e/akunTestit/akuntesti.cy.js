//Testataan että käyttäjä pääsee peliin

const { describe } = require("mocha");

describe("Testataan että käyttäjä pääsee peliin", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200");
  });

  it("Testataan että käyttäjä pääsee peliin", () => {
    cy.get("button#play.button1").click();
    cy.wait(2000);
    cy.get("button#joinGameButton.button1").click();
    cy.wait(2000);
    cy.get("button.button1").click();
    cy.wait(2000);
    cy.get("button#chooseGame.button2").click();
    cy.wait(2000);
    cy.get("button#vesiputous.button2").click();
    cy.wait(2000);
  });
});

describe("Testataan että pelinäkymässä kortteja voidaan klikata", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/GameOne");
  });

  it("Testataan että pelinäkymässä kortteja voidaan klikata", () => {
    cy.get("canvas#canvas").click({ force: true });
  });
});

describe("Testataan että pelinäkymässä pääsee takaisin etusivulle", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/GameOne");
  });
  it("Testataan että pelinäkymässä pääsee takaisin etusivulle", () => {
    cy.wait(5000);
    cy.get("canvas#canvas").click({ force: true });
  });
});
