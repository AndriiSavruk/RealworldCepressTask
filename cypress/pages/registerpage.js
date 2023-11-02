const userNameLoc = '[placeholder="Username"]';
const emailLoc = '[placeholder="Email"]';
const passwordLoc = '[placeholder="Password"]';
const signUpButtonLoc = 'button[type="submit"]';
const redWarningLoc = '.error-messages > :nth-child(1) > .ng-binding';

export class RegisterPage {
    typeName(name) {
        cy.get(userNameLoc).type(name);
    }
    checkName(name) {
        cy.get(userNameLoc).should('have.value',name);
    }
    typeEmail(email) {
        cy.get(emailLoc).type(email);
    }
    checkEmail(email) {
        cy.get(emailLoc).should('have.value',email);
    }
    typePassword(password) {
        cy.get(passwordLoc).type(password);
    }
    checkPassword(password) {
        cy.get(passwordLoc).should('have.value',password);
    }
    checkPasswordDotted() {
        cy.get(passwordLoc)
        .should('have.attr','type')
        .and('eql','password');
    }
    clicksignUpButton() {
        cy.get(signUpButtonLoc).click();
    }
    checkRedWarningVisible() {
        cy.get(redWarningLoc)
        .should('be.visible')
        .and('contain','email has already been taken');
    }
}