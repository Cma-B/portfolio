describe("The navbar renders successfully in each page", () => {
  beforeEach(() => {
    cy.visit("/"); 
  });
  
  it('visitor can see portfolio details', () => {
    cy.get('[data-cy="portfolio"]').click();
    cy.contains('main h1', 'Portfolio').should('be.visible');
  });
});
