/// <reference types="Cypress" />
export class addtocart
{
    hiturl(url)
    {
       cy.visit("https://automationexercise.com/")
       cy.url().should('contain',"https://automationexercise.com/")
       cy.title().should('eq',"Automation Exercise")
       
       
    }
    productpage(val)
    {
        return cy.get(val)
        
    }
    searchproduct(val)
    {
        return cy.get(val)
    }
    searxhsubmit(val)
    {
        return cy.get(val)
    }
    viewproduct(val)
    {
        return cy.get(val)
    }
    reviewname(val)
    {
        return cy.get(val)
    }
    reviewemail(val)
    {
        return cy.get(val)
    }
    revieww(val)
    {
        return cy.get(val)
    }
    reviewsubmit(val)
    {
        return cy.get(val)
    }
    addtocart(val)
    {
        return cy.get(val)
    }
    viewcart(val)
    {
        return cy.get(val)
    }
    removecart(val)
    {
        return cy.get(val)
    }
    clicktobuyproduct(val)
    {
        return cy.get(val)
    }
    searchproduct(val)
    {
        return cy.get(val)
    }
    searxhsubmit(val)
    {
        return cy.get(val)
    }
    viewproduct(val)
    {
        return cy.get(val)
    }
    addtocart(val)
    {
        return cy.get(val)
    }
    viewcart(val)
    {
        return cy.get(val)
    }
    proceedtocheckout1(val)
    {
       return cy.get(val)
    }
    register(val)
    {
        return cy.get(val)
    }
}