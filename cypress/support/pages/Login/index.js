const el = require('./elements').ELEMENTS;

class Login {
    preencherLogin() {
        cy.get(el.email).type('treinamentocwiweb@mail.com')
        cy.get(el.password).type('treinamento')
        cy.get(el.sing_in).click()
    }

    preencherEmail() {
        cy.get(el.emailcriar).type('treinamentotest4@mail.com')
        cy.get(el.sign_up).click()
    }

}

export default new Login();