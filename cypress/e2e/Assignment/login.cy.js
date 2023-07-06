/// <reference types="Cypress" />
export class login
{
    hiturl(url)
    {
       cy.visit("https://automationexercise.com/")
    }
    loginpage(val)
    {
        return cy.get(val)
    }
    loginwithinvalidemail(val)
    {
        return cy.get(val)
    }
    loginwithvalidpassword(val)
    {
        return cy.get(val)
    }
    loginwithvalidemail(val)
    {
        return cy.get(val)
    }
    loginwithvalidpassword(val)
    {
        return cy.get(val)
    }

    hitlogin(val)
    {
        return cy.get(val)
    }

}