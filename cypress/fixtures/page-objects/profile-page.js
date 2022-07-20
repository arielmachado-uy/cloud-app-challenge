import { Common } from '../page-objects/common-page';
const common = new Common();

export class Profile {
  getImageDropZone() {
    return cy.get('#user_avatar');
  }

  getSubmitButton() {
    return cy.get('input[data-testid="onboarding-submit-about-you-form"]');
  }

  validateProfileToastMessage(message) {
    common.getToastMessage()
      .then($element => {
        const text = $element.text();
        expect(text).to.be.eq(message);
      });
  }
}