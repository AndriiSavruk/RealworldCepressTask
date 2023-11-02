
const logoLoc = '.navbar-brand';
const favoriteArticlesBookmarkLoc = '.articles-toggle > .nav > :nth-child(2) > .nav-link';
const firstGlobalFeedArticleHeartLoc = '.pull-xs-right > .btn';
const editProfileSettingsButtonLoc = 'a.btn';

export class ProfilePage {
    clickLogo() {
        cy.get(logoLoc).click();
    }
    clickFavoriteArticlesBookmark() {
        cy.get(favoriteArticlesBookmarkLoc).click();
    }
    checkFavoriteArticlesIsActive() {
        cy.get(favoriteArticlesBookmarkLoc).should('have.class','active');
    }
    checkFirstGlobalArticleHeartIsWhite() {
        cy.get(firstGlobalFeedArticleHeartLoc)
        .should('have.css','color')
        .and('eql','rgb(255, 255, 255)');
    }
    clickFirstGlobalArticleHeart() {
        cy.get(firstGlobalFeedArticleHeartLoc).click();
    }
    clickEditProfileSettingsButton() {
        cy.get(editProfileSettingsButtonLoc).click();
    }
}