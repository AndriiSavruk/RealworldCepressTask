
import { HomePage } from "../pages/homepage";
import { LoginPage } from "../pages/loginpage";
import { RegisterPage } from "../pages/registerpage";
import { ProfilePage } from "../pages/profilepage";
import { SettingsPage } from "../pages/settingspage";

const homePage = new HomePage();
const loginPage = new LoginPage();
const registerPage = new RegisterPage();
const profilePage = new ProfilePage();
const settingsPage = new SettingsPage();
let userName;
let userEmail;
let userPassword;

beforeEach('Navigation', () => {
    homePage.navigate();
});

describe('Authorization and Registration section', () => {
    it('Test-case #1-1 Valid Login', () => {
        cy.fixture("user").then( (data) => {
            userName = data.name;
            userEmail = data.email;
            userPassword = data.password;
        // Step 1
        homePage.clickSignIn();
        cy.url().should('contain','login')
        .and('contain','realworld.io');
        // Step 2
        loginPage.typeEmail(userEmail);
        loginPage.checkEmail(userEmail);
        // Step 3
        loginPage.typePassword(userPassword);
        loginPage.checkPassword(userPassword);
        loginPage.checkPasswordDotted();
        // Step 4
        loginPage.clickSignIn();
        cy.url().should('eq','https://demo.realworld.io/#/');
        homePage.checkUserName(userName);
    })
    })
    it('Test-case #1-2 "Need an account?" link', () => {
        // Step 1
        homePage.clickSignIn();
        cy.url().should('contain','login')
        .and('contain','realworld.io');
        // Step 2
        loginPage.clickNeedAccountLink();
        cy.url().should('contain','register')
        .and('contain','realworld.io');
    })
    it('Test-case #1-3 Login with invalid login', () => {
        const invEmail = Math.random().toString(5).substring(2)+"@gmail.com";
        const invPassword = Math.random().toString(5).substring(2);
        // Step 1
        homePage.clickSignIn();
        cy.url().should('contain','login')
        .and('contain','realworld.io');
        // Step 2
        loginPage.typeEmail(invEmail);
        loginPage.checkEmail(invEmail);
        // Step 3
        loginPage.typePassword(invPassword);
        loginPage.checkPassword(invPassword);
        loginPage.checkPasswordDotted();
        // Step 4
        loginPage.clickSignIn();
        loginPage.checkRedWarningVisible();
    })
    it('Test case #1-4 Login with invalid password', () => {
        const invPassword = Math.random().toString(5).substring(2);
        cy.fixture("user").then( (data) => {
            userEmail = data.email;
        // Step 1
        homePage.clickSignIn();
        cy.url().should('contain','login')
        .and('contain','realworld.io');
        // Step 2
        loginPage.typeEmail(userEmail);
        loginPage.checkEmail(userEmail);
        // Step 3
        loginPage.typePassword(invPassword);
        loginPage.checkPassword(invPassword);
        loginPage.checkPasswordDotted();
        // Step 4
        loginPage.clickSignIn();
        loginPage.checkRedWarningVisible();
        })
    })
    it('Test case 1-5 Register with already existing login', () => {
        const invName = Math.random().toString(5).substring(2);
        const invPassword = Math.random().toString(5).substring(2);
        cy.fixture("user").then( (data) => {
            userEmail = data.email;
        // Step 1
        homePage.clickSignUp();
        cy.url().should('contain','register')
        .and('contain','realworld.io');
        // Step 2
        registerPage.typeName(invName);
        registerPage.checkName(invName);
        // Step 3
        registerPage.typeEmail(userEmail);
        registerPage.checkEmail(userEmail);
        // Step 4
        registerPage.typePassword(invPassword);
        registerPage.checkPassword(invPassword);
        registerPage.checkPasswordDotted();
        // Step 5
        registerPage.clicksignUpButton();
        registerPage.checkRedWarningVisible();
        })
    })
})

describe('Functional section', () => {
    beforeEach('Login on the Page', () => {
        cy.fixture("user").then( (data) => {
            userEmail = data.email;
            userPassword = data.password;
            homePage.clickSignIn();
            loginPage.loginOnThePage(userEmail,userPassword);
        })
    })
    it('Test case #1-6 Check if logo goes to the home page in Profile', () => {
        // Step 1
        homePage.clickProfileLink();
        cy.fixture("user").then( (data) => {
            userName = data.name;
            cy.url().should('contain',userName)
            .and('contain','realworld.io');
        })
        // Step 2
        profilePage.clickLogo();
        cy.url().should('eq','https://demo.realworld.io/#/');
    })
    it('Test case #1-7 Choose the Popular tag', () => {
        // Step 1
        homePage.chooseFistPopularTag();
        homePage.checkFirstNewBookmarkName();
    })
    it('Test case #1-8 Add the article to the Favorite', () => {
        // Step 1
        homePage.clickGlobalFeedBookmark();
        cy.wait(2000);
        homePage.checkGlobalFeedIsActive();
        // Step 2
        homePage.clickFirstGlobalFeedArticleHeart();
        homePage.checkFirstGlobalArticleHeartIsWhite();
        // Step 3
        homePage.clickProfileLink();
        cy.fixture("user").then( (data) => {
            userName = data.name;
            cy.url().should('contain',userName)
            .and('contain','realworld.io');
        })
        // Step 4
        profilePage.clickFavoriteArticlesBookmark();
        profilePage.checkFavoriteArticlesIsActive();
        profilePage.checkFirstGlobalArticleHeartIsWhite();
        profilePage.clickFirstGlobalArticleHeart();
    })
    it('Test case #1-9 "Edit profile settings button"', () => {
        // Step 1
        homePage.clickProfileLink();
        cy.fixture("user").then( (data) => {
            userName = data.name;
            cy.url().should('contain',userName)
            .and('contain','realworld.io');
        })
        // Step 2
        profilePage.clickEditProfileSettingsButton();
        cy.url().should('contain', 'settings')
            .and('contain','realworld.io');
        cy.fixture("user").then( (data) => {
            userName = data.name;
            userEmail = data.email;
            settingsPage.checkUserName(userName);
            settingsPage.checkEmail(userEmail);
        })
    })
    it('Test case #1-10 "The Fork on Github" link', () => {
        // Step 1
        homePage.clickOnGitHubLink();
        homePage.checkGitHubLinkTarget();
        homePage.checkGitHubLinkHref();

    })
})