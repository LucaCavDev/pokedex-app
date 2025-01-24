describe("Pokedex E2E Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display the homepage title", () => {
    cy.get("h1").should("contain.text", "Pokedex");
  });

  // it("should search for a Pokémon", () => {
  //   cy.get('input[placeholder="Search Pokemon..."]').type("Pikachu");
  //   cy.contains("Pikachu").should("be.visible");
  // });

  // it("should navigate to a Pokémon detail page", () => {
  //   cy.contains("Bulbasaur").click();
  //   cy.url().should("include", "/pokemon/1");
  //   cy.get("h1").should("contain.text", "Bulbasaur");
  // });

  // it("should switch language to Italian", () => {
  //   cy.contains("🇮🇹 Italiano").click();
  //   cy.get('input[placeholder="Cerca Pokémon..."]').should("exist");
  // });

  // it("should handle pagination", () => {
  //   cy.get(".pagination").contains("Next →").click();
  //   cy.get(".pagination").contains("← Previous").should("be.visible");
  // });

  // it("should display an error message if API fails", () => {
  //   cy.intercept('GET', 'https://pokeapi.co/api/v2/pokemon?limit=151', {
  //     statusCode: 500
  //   }).as('getPokemon');

  //   cy.visit("/");
  //   cy.wait('@getPokemon');
  //   cy.contains("Failed to fetch Pokémon data").should("be.visible");
  // });
});