/// <reference types="cypress"/>

export class Signuppage
{
    visit(url)
    {
        cy.visit(url)
    }
    signupbutton(signpvalue)
    {
        return cy.get(signpvalue)
  

    }
    createaccountbutton(crtacntbtn)
    {
        return cy.get(crtacntbtn)
    }
    namefield(namevalue)
    {
        return cy.get(namevalue)
    }
    emailfield(emailvalue)
    {
        return cy.get(emailvalue)

    }
    monthdropdown(montdropdownvalue)
    {
       return cy.get(montdropdownvalue)
    }
    daydropdown(monthdayvalue)
    {
        return cy.get(monthdayvalue)
    }
    yeardropdown(yeardayvalue)
    {
        return cy.get(yeardayvalue)
    }
    next(nextvalue)
    {
        return cy.get(nextvalue)
    }
    next2(nextvalue)
    {
        return cy.get(nextvalue)
    }
    signup(nextvalue)
    {
        return cy.get(nextvalue)
    }
    Authenticate(nextvalue1)
    {
        return cy.contains(nextvalue1)
    }



    fillfirstname(value)
    {
        //cy.get('[data-testid="open-registration-form-button"]').click()
        // cy.get('input[name="firstname"]').type(value)
        // field1.clear()
        // return this
    }
    fillsurname(value)
    {
        const field2=cy.get('input[name="lastname"]')
        field2.type(value)
        field2.clear()
        return this
    }
   fillemail(value)
    {
        const field3=cy.get('input[name="reg_email__"]' )
        field3.type(value)
        return this

    }
    fillassword(value)
    {
       const field4=cy.get('input[name="reg_passwd__"]'  )
       field4.type(value)
       field4.clear()
        return this

    }
   clickbirthday(value)
    {
        const field5= cv.get ('select[name="birthday_day"]')
        field5.click(value)
        return this
    }
    clickbirthmonth(value)
    {
        const field6=cv.get ('select[name="birthday_month"]')
        field6.click(value)
        return this
    }
   clickbirthyear(value)
    {
        const field7= cv.get ('select[name="birthday_year"]')
        field7.click(value)
        return this
    }
   clickgender(value)
    {
       const field8=cy.get(':nth-child(2) > ._58mt' )
       field8.click(value)
        return this
    }
   clicksubmit(value)
    {
      const field9=cy.get('._1lch')
      field9.click(value)
    }
    
}

