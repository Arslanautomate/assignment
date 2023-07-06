describe('Automate ecommerce website test suit', () => 
{
  it('General test case of landing page' , () => {
    cy.request('get',"https://dummy.restapiexample.com/api/v1/employees")
    .its('status')
    .should('eq',200)

  })
  
})