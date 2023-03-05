/// <reference types="Cypress" />

import CloathingPage from '../pageObject/ClothingNShoes';
import FrontPage from '../pageObject/FrontPage';
import MyAccountPage from '../pageObject/MyAccountPage';



describe('Smoke test', () => {


   it('openPage', () => {
    const frontPage = new FrontPage();

    cy.visit('https://www.etsy.com')
    //click to sign in
    frontPage.getSignIn().click()
    // fill out form
    frontPage.getEmail().type("nenadgrbicned1987@gmail.com")
    frontPage.getPassword().type("tgmtgm123123")
    //submit 
    frontPage.getSignInButton().click()
    //confirm login by getting message
    frontPage.getMessageFrontPage().contains('Welcome back, Nenad!')

  })
  it('cloathingPage', ()=>{
    const cloathingPage = new CloathingPage();
    cy.visit('https://www.etsy.com')
    cloathingPage.navigateOnCloathing().trigger('mouseover')
    cloathingPage.navigationOnMans().should('be.visible').trigger('mouseover')
    cloathingPage.navigationOnShirts().should('be.visible').click()
    cloathingPage.getYogaShirts().click()

    cloathingPage.getFilters().wait(2000).click()
    cloathingPage.getPriceFilter().wait(2000).click()
    cloathingPage.getColorFilter().wait(2000).click()
    cloathingPage.getLocation().wait(2000).click()
    cloathingPage.getShipTo().wait(2000).select('Serbia')
    cloathingPage.getApplayButton().click()

    cloathingPage.getSortByButton().click()
    cloathingPage.getSortByLowestPrice().should('be.visible').click()
    cloathingPage.getFirstItemSortByPrice().click()
    cloathingPage.getSecondItemSortByPrice().click()
    cloathingPage.compareItems()

  })
      it('myAccountPage', ()=>{
        
        const myAccountPage = new MyAccountPage();
        
        cy.visit('https://www.etsy.com')
        myAccountPage.getMyAccountButton.click()
        myAccountPage.getGiftLabel().click()
        myAccountPage.getCredit().click().should('equal',0.00)
  })
})