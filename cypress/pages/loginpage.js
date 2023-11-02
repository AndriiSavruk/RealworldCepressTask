const emailFieldLoc = '[type="email"]';
const passwordFieldLoc = '[placeholder="Password"]';
const signInButtonLoc = '[type="submit"]';
const needAccountLinkLoc = 'p.text-xs-center > [ui-sref="app.register"]';
const redWarningLoc = '[ng-repeat="error in errors"]';

export class LoginPage {
    typeEmail(email) {
        cy.get(emailFieldLoc).type(email);
    }
    checkEmail(email) {
        cy.get(emailFieldLoc).should('have.value',email);
    }
    typePassword(password) {
        cy.get(passwordFieldLoc).type(password);
    }
    checkPassword(password) {
        cy.get(passwordFieldLoc).should('have.value',password);
    }
    checkPasswordDotted() {
        cy.get(passwordFieldLoc)
        .should('have.attr','type')
        .and('eql','password');
    }
    clickSignIn() {
        cy.get(signInButtonLoc).click();
    }
    clickNeedAccountLink() {
        cy.get(needAccountLinkLoc).click();
    }
    checkRedWarningVisible() {
        cy.get(redWarningLoc)
        .should('be.visible')
        .and('contain','email or password is invalid');
    }
    loginOnThePage(email,password) {
        cy.get(emailFieldLoc).type(email);
        cy.get(passwordFieldLoc).type(password);
        cy.get(signInButtonLoc).click();
    }
}