describe("demo", () => {
  it("should handle aborted requests", () => {
    cy.intercept("https://jsonplaceholder.typicode.com/todos/1").as("xhr");
    cy.visit("http://localhost:3000");
    cy.get("button").contains("bad").click();
    cy.wait("@xhr");
  });
});
