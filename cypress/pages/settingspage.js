const userNameFieldLoc = '[placeholder="Username"]';
const userEmailFieldLoc = '[placeholder="Email"]';

export class SettingsPage {
checkUserName(name) {
    cy.get(userNameFieldLoc).should('have.value', name);
}
checkEmail(email) {
    cy.get(userEmailFieldLoc).should('have.value', email);
}
}