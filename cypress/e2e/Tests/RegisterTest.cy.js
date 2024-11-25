import registerData from '../../fixtures/registerData.json'
import {candidateRegistrationPage} from '../../Pages/register'
const Register_Page = new candidateRegistrationPage();

describe('Register Page Testing of Attendly',()=>
{

it('Browser Capability -> TC001',()=>{
    Register_Page.openUrl();

})
it('Verify that the Registration Button Is Working properly -> TC002',()=>{
    Register_Page.openUrl();
    Register_Page.enterFirstName(registerData.firstName)
    Register_Page.enterLastName(registerData.lastName)
    Register_Page.enterEmail(registerData.email)
    

})


}



)


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })