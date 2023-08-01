/// <reference types="Cypress" />

//const { eq } = require("cypress/types/lodash")

describe('Automate ecommerce website test suit', () => 
{
  it('General test case of landing page' , () => {
    cy.request(
        {
            methode: "Get",
            url:"https://gorest.co.in/public/v2/users",
            failOnStatusCode: "false",
            headers:{
                'authorization':"Bearer 7527e055ad0aa51189938aafe0f637aa2047cdfa4378a62e8c3dcf0ce5a65931 ",
            }
        }).then((res)=>
            {
                expect(res.status).to.eq(200)
            })
    })
})