/// <reference types="Cypress" />

export class assignment
{
    hiturl(url)
    {
       cy.visit("https://automationexercise.com/")
       cy.url().should('contain',"https://automationexercise.com/")
       cy.title().should('eq',"Automation Exercise")
       
       
    }
    
    logo(val)
    {
       return cy.get(val).should('be.visible').and('exist')
   
    }
    slider(val)
    {
        return cy.get(val)
    }
    subcribeemail(val)
    {
        return cy.get(val)
    }
    hitsubscribe(val)
    {
        return cy.get(val)
    }
    
    productlink(val)
    {
      return cy.get(val).should('exist')
    }
    cartlink(val)
    {
        return cy.get(val)
    }
    subcribeemail(val)
    {
        return cy.get(val)
    }
    hitsubscribe(val)
    {
        return cy.get(val)
    }
    Testcaseslink(val)
    {
        return cy.get(val)
    }
    apitestlink(val)
    {
        return cy.get(val)
    }
    womencategory(val)
    {
        return cy.get(val)
    }
    productlink(val)
    {
      return cy.get(val)
    }
    womencategory(val)
    {
        return cy.get(val)
    }
    tops(val)
    {
        return cy.get(val)
    }
    scroll(val)
    {
        return cy.get(val)
    }

}