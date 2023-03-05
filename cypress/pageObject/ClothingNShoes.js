class CloathingPage{

    navigateOnCloathing(){
        return cy.get('#desktop-category-nav > div.wt-bg-white.wt-text-caption.wt-position-relative.wt-z-index-4.v2-toolkit-cat-nav-tab-bar > div > ul > li:nth-child(2)')
    }

    navigationOnMans(){
        return cy.get('#side-nav-category-link-10936')
    }

    navigationOnShirts(){
        return cy.get('#catnav-l4-10938')
    }

    getYogaShirts(){
        return cy.get('#content > div > div.wt-bg-white.wt-grid__item-md-12.wt-pl-xs-1.wt-pr-xs-0.wt-pr-md-1.wt-pl-lg-0.wt-pr-lg-0.wt-mt-xs-0.wt-overflow-x-hidden.wt-bb-xs-1 > div > div.wt-mt-xs-2.wt-text-black > div.wt-grid.wt-pl-xs-0.wt-pr-xs-0.search-listings-group > div:nth-child(2) > div:nth-child(2) > div > div > div:nth-child(3) > ul > li:nth-child(4) > a > div.hobby-title.wt-bg-white.wt-p-xs-2.wt-overflow-hidden > p')
    }

    getFilters(){
        return cy.get('#search-filter-button > span.wt-hide-xs.wt-show-md.filter-expander')
    }
    // price is set up for under 25
    getPriceFilter(){
        return cy.get('#search-filter-form > div > div.main-filters > div:nth-child(5) > fieldset > div > div > div:nth-child(2) > label')
    }
    // color is set up for white
    getColorFilter(){
        return cy.get('#search-filter-form > div > div.main-filters > fieldset:nth-child(6) > div > div:nth-child(1) > div:nth-child(1) > div > label')
    }
    // set up location for Europe
    getLocation(){
        return cy.get('#search-filter-form > div > div.main-filters > div:nth-child(13) > fieldset > div > div > div:nth-child(2) > label')
    }
    getShipTo(){
        return cy.get('#ship_to_select')
    }
    getApplayButton(){
        return cy.get('#search-filters-overlay > div > div > div.wt-bt-xs.wt-display-flex-xs.wt-justify-content-space-around.filter-overlay-button-container-height.filter-overlay-button-container--desktop > button.wt-btn.wt-btn--primary.wt-width-full.wt-mt-xs-3.wt-mb-xs-3.wt-mr-xs-3')
    }
    getSortByButton(){
        return cy.get('#sortby > button')
    }
    getSortByLowestPrice(){
        return cy.get('#sortby > div > a:nth-child(3)')
    }
    // set up for lowest price
    getFirstItemSortByPrice(){
        return cy.get('#content > div > div.wt-bg-white.wt-grid__item-md-12.wt-pl-xs-1.wt-pr-xs-0.wt-pr-md-1.wt-pl-lg-0.wt-pr-lg-0.wt-bb-xs-1 > div > div.wt-mt-xs-3.wt-text-black > div.wt-grid.wt-pl-xs-0.wt-pr-xs-0.search-listings-group > div:nth-child(2) > div.wt-bg-white.wt-display-block.wt-pb-xs-2.wt-mt-xs-0 > div:nth-child(1) > div > div > ol > li:nth-child(1) > div > div > div > button > div > span.etsy-icon.wt-nudge-t-2.wt-icon--smaller-xs.wt-display-block > svg')
    }
    getSecondItemSortByPrice(){
        return cy.get('#content > div > div.wt-bg-white.wt-grid__item-md-12.wt-pl-xs-1.wt-pr-xs-0.wt-pr-md-1.wt-pl-lg-0.wt-pr-lg-0.wt-bb-xs-1 > div > div.wt-mt-xs-3.wt-text-black > div.wt-grid.wt-pl-xs-0.wt-pr-xs-0.search-listings-group > div:nth-child(2) > div.wt-bg-white.wt-display-block.wt-pb-xs-2.wt-mt-xs-0 > div:nth-child(1) > div > div > ol > li:nth-child(2) > div > div > div > button')
    }
    compareItems(){
        try {
            if (this.getFirstItemSortByPrice < this.getSecondItemSortByPrice)
        return  console.log("Items are compareble in right way")
        } catch (error) {
            return  console.log("Error")
        } 
        
        
    }
}
export default CloathingPage;