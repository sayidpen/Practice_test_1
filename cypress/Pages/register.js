
export class candidateRegistrationPage{
Locators={
         Fristname : '#first_name',
         LastName : '#last_name',
         Email : '#email',
         Gender :'#gender',
         Password : '#password',
         ReEnterPassword : '#confirm_password',
         AddressLine_1: '#addressLine1',
         AddressLine_2: '#addressLine2',
         Town_City : '#townOrCity', 
         PostCode : '#postCode',
         DateOfBirth : '#dob',
         NationalInsuranceNumber : '#ni_number',
         PhoneNumber : '#phone',
         SelectRole : "select[name='role']",
         ConsultantSearch : '#consultantSearch',
         //Questions
         RightToWorkUK : '#rightToWorkUK',
         DbsCheck : '#dbsCheck',
         OptOutOfPension : '#optOutOfPension',
         MedicalConditions : '#medicalConditions',
         // Other Documents 
         PassportNumber : '#passportNumber',
         PassportFile : '#passport',
         ProofAddress : '#proofOfAddress',
         // Banking Information 
         AccountType : '#account_type',
         BankName : '#bank_name',
         AccountholderName : '#account_name',
         AccountNumber : '#account_number',
         BankCode : '#bank_code'


    }
  openUrl(){
    cy.visit(Cypress.env('URL'))
  }

    enterFirstName (Frist_Name) {
        cy.get(this.Locators.Fristname).type(Frist_Name)
    }
    enterLastName (Last_Name) {
        cy.get(this.Locators.LastName).type(Last_Name)
    }
    enterEmail (Email) {
        cy.get(this.Locators.Email).type(Email)
    }
    enterGender (Gender) {
        cy.get(this.Locators.Gender).type(Gender)
    }
    enterPassword (Password) {
        cy.get(this.Locators.Password).type(Password)
    }
    enterReEnterPassword (ReEnterPassword) {
        cy.get(this.Locators.ReEnterPassword).type(ReEnterPassword)
    }

    enterAddressLine_1 (AddressLine_1) {
        cy.get(this.Locators.AddressLine_1).type(AddressLine_1)
    }
    enterAddressLine_2 (AddressLine_2) {
        cy.get(this.Locators.AddressLine_2).type(AddressLine_2)
    }

    enterTown_City (Town_City) {
        cy.get(this.Locators.Town_City).type(Town_City)
    }
    enterPostCode (PostCode) {
        cy.get(this.Locators.PostCode).type(PostCode)
    }
    enterDateOfBirth (DateOfBirth) {
        cy.get(this.Locators.DateOfBirth).type(DateOfBirth)
    }
    enterNationalInsuranceNumber (NationalInsuranceNumber) {
        cy.get(this.Locators.NationalInsuranceNumber).type(NationalInsuranceNumber)
    }

    enterPhoneNumber (PhoneNumber) {
        cy.get(this.Locators.PhoneNumber).type(PhoneNumber)
    }

    enterSelectRole (SelectRole) {
        cy.get(this.Locators.SelectRole).Check(SelectRole)
    }

    enterConsultantSearch(ConsultantSearch) {
        cy.get(this.Locators.ConsultantSearch).type(ConsultantSearch)
    }

     //Questions

    enterRightToWorkUK(RightToWorkUK) {
        cy.get(this.Locators.RightToWorkUK).check(RightToWorkUK)
    }

    enterDbsCheck(DbsCheck) {
        cy.get(this.Locators.DbsCheck).check(DbsCheck)
    }
    enterOptOutOfPension(OptOutOfPension) {
        cy.get(this.Locators.OptOutOfPension).check(OptOutOfPension)
    }
    enterMedicalConditions(MedicalConditions) {
        cy.get(this.Locators.MedicalConditions).type(MedicalConditions)
    }

     // Other Documents 

    enterPassportNumber(PassportNumber) {
        cy.get(this.Locators.PassportNumber).type(PassportNumber)
    }
    enterPassportFile(PassportFile) {
        cy.get(this.Locators.FristPassportFilename).type(PassportFile)
    }
    enterProofAddress(ProofAddress) {
        cy.get(this.Locators.FriProofAddresstname).type(ProofAddress)
        
        }
       // Banking Information 
    enterAccountType(AccountType) {
        cy.get(this.Locators.AccountType).type(AccountType)
    }
    enterBankName(BankName) {
        cy.get(this.Locators.BankName).type(BankName)
    }
    enterAccountholderName(AccountholderName) {
        cy.get(this.Locators.AccountholderName).type(AccountholderName)
    }
    enterAccountNumber(AccountNumber) {
        cy.get(this.Locators.AccountNumber).type(AccountNumber)
    }
    enterBankCode(BankCode) {
        cy.get(this.Locators.BankCode).type(BankCode)
    }


    

}