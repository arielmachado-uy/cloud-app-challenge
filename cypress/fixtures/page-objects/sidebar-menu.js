export class Sidebar {

  getMenuOptions() {
    return cy.get('#layout-sidebar');
  }

  validateMenuOptions(menuList) {
    menuList.forEach((menu) => {
      this.getMenuOptions()
        .find('p')
        .should('contain', menu);
    });
  }

  validateSubmenuOptions(submenuList) {
    submenuList.forEach((submenu) => {
      this.getMenuOptions()
        .find('ul.sidebar-list li')
        .should('contain', submenu);
    });
  }
}