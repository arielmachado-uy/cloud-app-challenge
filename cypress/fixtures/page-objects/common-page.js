export class Common {

  getLabel(title) {
    return cy.get('label')
      .contains(title);
  }
}