/// <reference types="cypress" />

Cypress.Commands.add('apiSignUp', (email, password) => {
  cy.request({
    method: 'POST',
    url: 'https://share.getcloudapp.com/api/v4/account',
    headers: {},
    body: {
      email: email,
      password: password,
    },
  })
})

Cypress.Commands.add('apiSignIn', (email, password) => {
  cy.request({
    method: 'POST',
    url: 'https://share.getcloudapp.com/accounts/login',
    headers: {},
    body: {
      email: email,
      password: password,
    },
  })
    .then(response => {
      // Let's get the value from the header "Set-Cookie"
      // and work with it until we get the value for the "_session_id"
      const session = ((Object.values(response.headers)[15])[0]);
      const sessionValues = session.split(";");
      const sessionId = sessionValues[0].split("=");

      // Once we get the "_session_id" value we can programmatically set the cookie in the browser
      cy.setCookie('_session_id', sessionId[1]);
    })
})

Cypress.Commands.add('generateRandomEmail', () => {
  // Get a random email every time
  const uuid = () => Cypress._.random(0, 1e8)
  const id = uuid();

  return `user${id}@mailinator.com`;
})