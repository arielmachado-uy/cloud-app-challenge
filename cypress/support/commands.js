/* global Cypress cy */
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

Cypress.Commands.add('generateRandomEmail', (email, password) => {
  // Get a random email every time
  const uuid = () => Cypress._.random(0, 1e8)
  const id = uuid();

  return `user${id}@mailinator.com`;
})