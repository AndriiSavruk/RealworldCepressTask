export class LoginPage {
    typeEmail(email) {
        cy.get(':nth-child(2) > .form-control').type(email);
    }
    checkEmail(email) {
        cy.get(':nth-child(2) > .form-control').should('have.value',email);
    }
    typePassword(password) {
        cy.get(':nth-child(3) > .form-control').type(password);
    }
    checkPassword(password) {
        cy.get(':nth-child(3) > .form-control').should('have.value',password);
    }
    checkPasswordDotted() {
        cy.get(':nth-child(3) > .form-control')
        .should('have.attr','type')
        .and('eql','password');
    }
    clickSignIn() {
        cy.get('.btn').click();
    }
}