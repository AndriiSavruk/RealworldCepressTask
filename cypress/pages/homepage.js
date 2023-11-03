const signInLoc = '[href="#/login"]';
const signUpLoc = '[href="#/register"]';
const userProfileLoc = ':nth-child(4) > .nav-link';
const firstPopularTagLoc = '.tag-list > :nth-child(1)';
const firstNewBookmarkLoc = '[ng-show="$ctrl.listConfig.filters.tag"] > .nav-link';
const globalFeedBookmarkLoc = '.feed-toggle > .nav > :nth-child(2) > .nav-link';
const firstGlobalFeedArticleHeartLoc = ':nth-child(1) > .article-preview > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > .pull-xs-right > .btn';

export class HomePage {
    navigate() {
        cy.visit('https://demo.realworld.io/#/');
    }
    clickSignIn() {
        cy.get(signInLoc).click();
    }
    clickSignUp() {
        cy.get(signUpLoc).click();
    }
    checkUserName(name) {
        cy.get(userProfileLoc).should('contain',name);
    }
    clickProfileLink() {
        cy.get(userProfileLoc).click();
    }
    chooseFistPopularTag() {
        cy.get(firstPopularTagLoc).click();
    }
    checkFirstNewBookmarkName() {
        cy.get(firstPopularTagLoc).then( (x) => {
            let tagName = x.text();
            cy.get(firstNewBookmarkLoc).should('contain',tagName);
        })
    }
    clickGlobalFeedBookmark() {
        cy.get(globalFeedBookmarkLoc).click();
    }
    checkGlobalFeedIsActive() {
        cy.get(globalFeedBookmarkLoc).should('have.class','active');
    }
    clickFirstGlobalFeedArticleHeart() {
        cy.get(firstGlobalFeedArticleHeartLoc).click();
    }
    checkFirstGlobalArticleHeartIsWhite() {
        cy.get(firstGlobalFeedArticleHeartLoc)
        .should('have.css','color')
        .and('eql','rgb(255, 255, 255)');
    }
}

