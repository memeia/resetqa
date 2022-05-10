/// <reference types="Cypress" />

//import homePage from '../support/pages/Home';
//import categoryPage from '../support/pages/Category';
//import loginPage from '../support/pages/Login';
//import myAccountPage from '../support/pages/MyAccount';

import{
    homePage,
    categoryPage,
    loginPage,
    myAccountPage
} from '../support/pages'


describe('Fluxos do ecommerce', () => {


    //acessar conteudo de mais de uma catyegoria
    //saber quais sao as categorias
    //acessar de forma dinamica uma categoria
    //validar de forma dinamica uma categoria

    //data driven tests
    categoryPage.CATAGORIES.forEach(category => {
        it.skip(`acessar categoria ${category}`, () => {
            homePage.acessarCategoria(category);
            categoryPage.validarAcessoACategoria(category)
        });
    });
    it('realizar login', () => {
        homePage.acessarLogin();
        loginPage.preencherLogin();
        myAccountPage.validarLoginRealizadoComSucesso();
        
    })
});

//page objects

// 3 testes:
//1. acessar categoria t-shirts
//2. realizar login
//3. realizar um cadastro

//asserções: chai assertions
 //acessar a pagina
       //mapear e clicar na categoria t-shirts
       //validar que o breadcrumb exibe a categoria acessada

       //paginas para o primeiro teste

       //home
        //acesso a uma categoria
        //elementos da categoria
       //category
         //validação
         //elementos de breadcrumb

         //pagina >
         // ações > index.js
         //elememtos >elements.js


       // cy.get('a[title=T-shirts]').last().click();