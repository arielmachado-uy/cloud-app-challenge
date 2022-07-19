export class Sidebar {

  getMenuOptions() {
    return cy.get('#layout-sidebar')
      .find('p');
  }

  validateMenuOptions(menuList) {
    menuList.forEach((menu) => {
      this.getMenuOptions().should('contain', menu);
    });
  }
}