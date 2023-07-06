/// <reference types="Cypress" />
import{assignment} from '../Assignment/Ecommerce.cy'
import { addtocart } from './add to cart.cy';
import {signuppage} from '../Assignment/signuptest.cy'
import { contactus } from './contact us.cy'
import { login } from './login.cy';
import 'cypress-file-upload';
describe('Automate ecommerce website test suit', () => 
{
  it.only('General test case of landing page' , () => {
    const final = new assignment()
    final.hiturl();
    final.logo('a > img').click()
    final.slider('#slider-carousel > .right > .fa').click().wait(1000)
    cy.scrollTo('bottom')
    final.subcribeemail('#susbscribe_email').type('arslan.ali@invozone.com')
    final.hitsubscribe('#subscribe').click()
    final.productlink('.shop-menu > .nav > :nth-child(2) > a').click()
    final.cartlink('.shop-menu > .nav > :nth-child(3) > a').click()
    final.subcribeemail('#susbscribe_email').type('arslan.ali@invozone.com')
    final.hitsubscribe('#subscribe').click()
    final.Testcaseslink('.shop-menu > .nav > :nth-child(5) > a').click()
    final.apitestlink('.shop-menu > .nav > :nth-child(6) > a').click()
    final.productlink('.shop-menu > .nav > :nth-child(2) > a').click()
    final.womencategory(':nth-child(1) > .panel-heading > .panel-title > a > .badge').click().wait(1000)
    final.tops('#Women > .panel-body > ul > :nth-child(2) > a').click()
  })
  it ('Cart page test cases' , () => 
  {
    const finalcart = new addtocart()
    finalcart.hiturl();
    finalcart.productpage('.shop-menu > .nav > :nth-child(2) > a').click()
    finalcart.searchproduct('#search_product').type("stylish dress").wait(1000)
    finalcart.searxhsubmit('#submit_search').click()
    finalcart.viewproduct('.choose > .nav > li > a').click()
    finalcart.reviewname('#name').type("Arslan").wait(1000)
    finalcart.reviewemail('#email').type("arslan.ali@invozone.com").wait(1000)
    finalcart.revieww('#review').type("this product is awesome")
    finalcart.reviewsubmit('#button-review').click()
    finalcart.addtocart(':nth-child(5) > .btn').click()
    finalcart.viewcart('u').click()
    finalcart.removecart('.cart_quantity_delete').click().wait(1000)
    finalcart.clicktobuyproduct('#empty_cart > .text-center > a > u').click().wait(1000)
    finalcart.searchproduct('#search_product').type("stylish dress").wait(1000)
    finalcart.searxhsubmit('#submit_search').click()
    finalcart.viewproduct('.choose > .nav > li > a').click()
    finalcart.addtocart(':nth-child(5) > .btn').click()
    finalcart.viewcart('u').click()
    finalcart.proceedtocheckout1('.col-sm-6 > .btn').click()
    finalcart.register('.modal-body > :nth-child(2) > a > u').click()
  })
    it('Sign up page test cases' , () => 
    {
    const final1 = new signuppage()
    final1.hiturl();
    final1.signup('.shop-menu > .nav > :nth-child(4) > a').click();
    final1.namefield('[data-qa="signup-name"]').type('M Arslan Ali')
    final1.emailfield('[data-qa="signup-email"]').type("arslan.ali+12@invozone.com")
    final1.subscribeemail('#susbscribe_email').type("arslan.ali@invozone.com")
    final1.subscribebutton('#subscribe').click()
    final1.signupbutton('[data-qa="signup-button"]').click()
    cy.get('[data-qa="signup-email"]').clear()
    final1.emailfield('[data-qa="signup-email"]').type("arslan.ali+31@invozone.com")
    final1.signupbutton('[data-qa="signup-button"]').click()
    final1.radiobutton('#id_gender1').click().wait(1000)
    final1.password('[data-qa="password"]').type("A1234r$")
    final1.datedropdown('[data-qa="days"]').select('17')
    final1.monthdropdown('[data-qa="months"]').select('February')
    final1.yeardropdown('[data-qa="years"]').select('1999')
    final1.checkboxbutton('#optin').click().wait(1000)
    final1.firstname('[data-qa="first_name"]').type("Arslan")
    final1.lastname('[data-qa="last_name"]').type("Ali")
    final1.company('[data-qa="company"]').type("InvoZone PVT LTD")
    final1.adress('[data-qa="address"]').type("Johar town")
    final1.adress2('[data-qa="address2"]').type("Emporium mall johar town lahore")
    final1.country('[data-qa="country"]').select('United States')
    final1.state('[data-qa="state"]').type("Punjab")
    final1.city('[data-qa="city"]').type("Lahore")
    final1.zipcode('[data-qa="zipcode"]').type("53000")
    final1.mobileno('[data-qa="mobile_number"]').type("+98745678756")
    final1.submit('[data-qa="create-account"]').click()
    final1.continue('[data-qa="continue-button"]').click()
    final1.productpage('.shop-menu > .nav > :nth-child(2) > a').click()
    final1.searchproduct('#search_product').type("stylish dress")
    final1.searxhsubmit('#submit_search').click()
    final1.viewproduct('.choose > .nav > li > a').click()
    final1.quantity('input[name="quantity"]').type("12").wait(1000)
    final1.addtocart(':nth-child(5) > .btn').click()
    final1.viewcart('u').click()
    final1.proceedtocheckout('.col-sm-6 > .btn').click()
    final1.placeorder(':nth-child(7) > .btn').click()
    final1.nameoncard('[data-qa="name-on-card"]').type("Arslan ali").wait(1000)
    final1.numberoncard('[data-qa="card-number"]').type("4111111111111111").wait(1000)
    final1.cvc('[data-qa="cvc"]').type("543").wait(1000)
    final1.expirymonth('[data-qa="expiry-month"]').type("23/03/2026").wait(1000)
    final1.expiryyear('[data-qa="expiry-year"]').type("2026").wait(1000)
    final1.paybutton('[data-qa="pay-button"]').click()
    final1.continuee('[data-qa="continue-button"]').click()
    //final1.downloadinvoice('.col-sm-9 > .btn-default').click()
    //cy.wait(10000)
    final1.logout('.shop-menu > .nav > :nth-child(4) > a').click()
    })
    it('Login page testcases' , () => 
    { 
      const finallogin=new login
      finallogin.hiturl();
      finallogin.loginpage('.shop-menu > .nav > :nth-child(4) > a').click();
      finallogin.loginwithinvalidemail('[data-qa="login-email"]').type("arslanfghjbvftyu678987909@yahoo.com")
      finallogin.loginwithvalidpassword('[data-qa="login-password"]').type("123")
      finallogin.hitlogin('[data-qa="login-button"]').click()
      cy.get('[data-qa="login-email"]').clear()
      cy.get('[data-qa="login-password"]').clear() 
      finallogin.loginwithvalidemail('[data-qa="login-email"]').type("arslan.ali+12@invozone.com")
      finallogin.loginwithvalidpassword('[data-qa="login-password"]').type("A1234r$")
      finallogin.hitlogin('[data-qa="login-button"]').click()
    })
    it('Contact us page testcases' , () => 
    {
      
    const final2=new contactus() 
    final2.hiturl();
    final2.contactuspage('.shop-menu > .nav > :nth-child(8) > a').click()
    final2.name('[data-qa="name"]').type("Arslan")
    final2.email('[data-qa="email"]').type("Arslan.ali@invozone.com")
    final2.subject('[data-qa="subject"]').type ("I'm unable to put product in cart")
    final2.message('[data-qa="message"]').type("This is testing message")
    final2.fileupload(':nth-child(6) > .form-control').attachFile('Screenshot 2023-06-05 at 7.57.55 PM')
    final2.submit('[data-qa="submit-button"]').click()
  })
    })
  