describe("Pelitesti", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
  });

  it("Testataan että päästään peliin ja että peli tomii. Sen jälkeen yritetään päästä takaisin etusivulle.", () => {
    cy.wait(1500);
  });
});
