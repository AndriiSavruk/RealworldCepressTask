export class HomePage {
    navigate() {
        cy.visit('https://demo.realworld.io/#/');
    }
    clickSignIn() {
        cy.get('[show-authed="false"] > :nth-child(2) > .nav-link').click();
    }
    checkUserName(name) {
        cy.get(':nth-child(4) > .nav-link').should('contain',name);
    }
}

