const el = require('./elements') .ELEMENTS

class Category {
    CATAGORIES = [
        'T-shirts',
        'Dresses',
        'Women'
    ];

    validarAcessoACategoria(category){
        cy.get(el.breadcrumb).should('contain.text', `${ category }`); 
    }
}

export default new Category();

//T-shirts
//Dresses
//Women