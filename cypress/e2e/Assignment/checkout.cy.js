/// <reference types="Cypress" />
export class checkoutproduct 
{
    hiturl(url)
    {
       cy.visit("https://automationexercise.com/")
       cy.url().should('contain',"https://automationexercise.com/")
       cy.title().should('eq',"Automation Exercise")
       
       
    }
    
   
   
   
}