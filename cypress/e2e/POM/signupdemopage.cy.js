///<reference types="cypress"/>
import {Signuppage} from './Signup/signupdemoo'
describe('My first test suit', () => 
{
  it('My first test case of suit' , () => {
    const sp= new Signuppage()
        sp.visit("https://twitter.com/")
        sp.signupbutton('[data-testid="signup"]').click()
        sp.createaccountbutton('.r-nllxps > .css-18t94o4.r-13qz1uu').click()
        sp.namefield('.r-1isdzm1 > :nth-child(2) > :nth-child(1)').type("Arslan ali")
        sp.emailfield('.r-1isdzm1 > :nth-child(2) > :nth-child(2)').type("Arslan.ali@invozone.com")
        sp.monthdropdown('.r-16xksha > [data-testid]').select('March')
        sp.daydropdown('.r-16y2uox.r-1b7u577 > [data-testid]').select('17')
        sp.yeardropdown('.r-1x0uki6 > :nth-child(3) > .r-18u37iz > :nth-child(3) > [data-testid]').select('1997')
        sp.next('[data-testid="ocfSignupNextLink"]').click()
        sp.next2('[data-testid="ocfSettingsListNextButton"]').click()
        sp.signup('[data-testid="ocfSignupReviewNextLink"]').click()
        sp.Authenticate('Authenticate').click()
       
        // sp.field2("Ali")
        // sp.field3("arslan.ali@invozone.com")
        // sp.field4("A123456789r@")
        // sp.field5()
        // sp.field6()
        // sp.field7()
        // sp.field8()
        // sp.field9()

        
    

  })
})