describe("Pokedex E2E Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the homepage title", () => {
    cy.get("h1").should("contain.text", "Pokedex");
  });

});