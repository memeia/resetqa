const el = require('./elements').ELEMENTS;

class Login {
    preencherLogin() {
        cy.get(el.email).type('treinamentocwiweb@mail.com')
        cy.get(el.password).type('treinamento')
        cy.get(el.sing_in).click()
    }
}

export default new Login();