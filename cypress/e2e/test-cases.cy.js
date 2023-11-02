import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";

const homePage = new HomePage();
const loginPage = new LoginPage();

beforeEach('Navigation', () => {
    homePage.navigate();
});

describe('Authorization and Registration section', () => {
    it('Test-case #1-1 Valid Login', () => {
        // Step 1
        homePage.clickSignIn();
        cy.url().should('contain','login')
        .and('contain','realworld.io');
        // Step 2
        cy.fixture("user").then( (data) => {
            loginPage.typeEmail(data.email);
            loginPage.checkEmail(data.email);
        });
        // Step 3
        cy.fixture("user").then( (data) => {
            loginPage.typePassword(data.password);
            loginPage.checkPassword(data.password);
        })
        loginPage.checkPasswordDotted();
        // Step 4
        loginPage.clickSignIn();
        cy.url().should('eq','https://demo.realworld.io/#/');
        cy.fixture("user").then( (data) => {
            homePage.checkUserName(data.name);
        })
        
    })
})