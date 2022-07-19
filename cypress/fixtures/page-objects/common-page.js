export class Common {

  getLabel(title) {
    return cy.get('label')
      .contains(title);
  }

  getToastMessage() {
    return cy.get('div[class="toast-body"]').should('be.visible');
  }
}