describe("Pelitesti", () => {
  beforeEach(() => {
    cy.visit("localhost:4200/MainMenu");
  });

  it("Testataan että päästään peliin ja että peli tomii. Sen jälkeen yritetään päästä takaisin etusivulle.", () => {
    cy.wait(1500);
    cy.get("button#play.button1").scrollIntoView().click();
    cy.wait(1500);
    cy.url().should("include", "localhost:4200/JoinTable");
    cy.wait(1500);
    cy.get("button#quickGame.button1").click();
    cy.wait(1500);
    cy.url().should("include", "localhost:4200/GameOne");
    cy.wait(5000);
    for (let i = 0; i <= 102; i++) {
      cy.get("canvas#canvas").click({ force: true });
      cy.wait(25);
    }
    cy.wait(1500);
    cy.get("button#newGame.button1").scrollIntoView().click();
    cy.wait(1500);
    cy.url().should("include", "localhost:4200/GameOne");
    cy.wait(1000);
  });
});
