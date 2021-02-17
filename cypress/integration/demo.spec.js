it('should handle non-aborted requests', () => {
  cy.intercept('https://jsonplaceholder.typicode.com/todos/1').as('xhr')
  cy.visit('index.html')
  cy.get('button').contains('good').click()
  cy.get('pre').contains('delectus') // response body renders to page
  // ✅ passes
  cy.wait('@xhr')
})

it('cy.route should handle aborted requests', () => {
  cy.server()
  cy.route('https://jsonplaceholder.typicode.com/todos/1').as('xhr')
  cy.visit('index.html')
  cy.get('button').contains('bad').click()
  cy.get('pre').contains('delectus') // response body renders to page
  // ✅ passes
  cy.wait('@xhr')
})

it('cy.intercept should handle aborted requests', () => {
  cy.intercept('https://jsonplaceholder.typicode.com/todos/1').as('xhr')
  cy.visit('index.html')
  cy.get('button').contains('bad').click()
  cy.get('pre').contains('delectus')  // response body renders to page
  // ❗️ times out sometimes
  cy.wait('@xhr')
})
