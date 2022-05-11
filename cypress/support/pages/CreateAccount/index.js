const el = require('./elements').ELEMENTS;

class CreateAccount {
   preencherCadastro(){
    cy.get(el.titleMrs).click()
    cy.get(el.firstName).type('Junilson')
    cy.get(el.lastName).type('Silva')
    cy.get(el.password).type('12345')
    cy.get(el.address).type('Rua Feliz, 305, 65, Jardim Alegre')
    cy.get(el.city).type('Nova Esperança')
    cy.get(el.state).select('9')
    cy.get(el.cep).type('90000')
    //cy.get(el.country).select('21')
    cy.get(el.mobilePhone).type('999999999')
    cy.get(el.addressAlias).type('Casa')
    cy.get(el.registerButton).click()
   }
}

export default new CreateAccount();