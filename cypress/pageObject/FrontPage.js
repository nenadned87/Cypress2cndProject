class FrontPage {

    getSignIn(){
      return  cy.get('#gnav-header-inner > div.wt-flex-shrink-xs-0 > nav > ul > li:nth-child(1) > button')
    }
    getEmail(){
       return cy.get('#join_neu_email_field')
    }
    
    getPassword(){
       return cy.get('#join_neu_password_field')
    }
    
    getSignInButton(){
       return cy.get('#join-neu-form > div.wt-grid.wt-grid--block > div > div:nth-child(10) > div > button')
    }
    
    getMessageFrontPage(){
        return  cy.get
        ('#content > div > div:nth-child(1) > div:nth-child(2) > div > div > h1.welcome-message-text.line-clamp.wt-text-center-xs.wt-hide-xs.wt-show-lg.wt-mb-xs-3.wt-mb-md-3.wt-mt-xs-3.wt-mt-md-3.wt-text-heading-01')
        .contains('Welcome back, Nenad!')
    }
}
export default FrontPage;