const page = require("../page/object.page")


ontext("Navigation", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.wait(1000);
    });
     
    it("Aqui va el primer escenario", () => {
      //When I go section pages
      cy.wait(100000);

    });
  });
  