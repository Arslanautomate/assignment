/// <reference types="Cypress" />
export class contactus
{   hiturl(url)
    {
       cy.visit("https://automationexercise.com/")
    }
    contactuspage (val)
    {
        return cy.get(val)
    }
    name(val)
    {
        return cy.get(val)
    }
    email(val)
    {
        return cy.get(val)
    }
    subject(val)
    {
        return cy.get(val)
    }
    message(val)
    {
        return cy.get(val)
    }
    fileupload(val)
    {
        return cy.get(val)
    }
    submit(val)
    {
        return cy.get(val)
    }
}