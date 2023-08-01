/// <reference types="Cypress" />

//const { eq } = require("cypress/types/lodash")

describe('Automate ecommerce website test suit', () => 
{
    let accesstoken = '7527e055ad0aa51189938aafe0f637aa2047cdfa4378a62e8c3dcf0ce5a6593'
  it('General test case of landing page' , () => {
    cy.request(
        {
            methode: "Post",
            url:"https://gorest.co.in/public/v2/users",
            failOnStatusCode: "false",
            headers:{
                'authorization':"Bearer" + accesstoken ,
            },
           Body:
           {
            "id": 4104739,
            "name": "Arslan ali",
            "email": "arslan.ali@iinvozone.com",
            "gender": "male",
            "status": "inactive"

           }
        }).then((res)=>
            {
                expect(res.status).to.eq(200)
                expect(res.Body).has.property('status','inactive')
            })
    })
})