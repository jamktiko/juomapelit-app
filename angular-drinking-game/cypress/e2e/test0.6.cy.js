describe("Pelitesti", () => {
  beforeEach(() => {
    cy.visit("https://dev.brewdeck.click");
  });

  it("Testataan että päästään peliin ja että peli tomii. Sen jälkeen yritetään päästä etusivulle takaisin.", () => {
    cy.wait(1500);
    cy.get("button#play.button1").scrollIntoView().click();
    cy.wait(1500);
    cy.url().should("include", "https://dev.brewdeck.click/JoinTable");
    cy.wait(1500);
    cy.get("button#quickGame.button1").click();
    cy.wait(1500);
    cy.url().should("include", "https://dev.brewdeck.click/GameOne");
    cy.wait(5000);
    for (let i = 0; i <= 102; i++) {
      cy.get("canvas#canvas").click({ force: true });
      cy.wait(25);
    }
    cy.get("button#newGame.button1").scrollIntoView().click();
    cy.wait(1500);
    cy.url().should("include", "https://dev.brewdeck.click/GameOne");
    cy.wait(1000);
  });
});
