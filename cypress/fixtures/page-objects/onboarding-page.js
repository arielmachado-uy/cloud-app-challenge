export class Onboarding {

  getPageLogo() {
    return cy.get('img[data-testid="cloudapp-logo"]');
  }

  getOnboardingPageTabs() {
    return cy.get('ol li')
  }

  validatePageTabs(tabList) {
    tabList.forEach((tab) => {
      this.getOnboardingPageTabs().should('contain', tab);
    });
  }

  getPageTab(name) {
    return this.getOnboardingPageTabs().contains(name);
  }

  getOnboardingContent() {
    return cy.get('#onboarding-content');
  }
}