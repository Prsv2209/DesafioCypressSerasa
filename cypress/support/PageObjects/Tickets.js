import loc from "../Locators/locators.spec"

Cypress.Commands.add('ValidarLabel', () => {
    cy.get(loc.TICKETS.LB_TICKETBOX)
    .should('be.visible')    
    .should('contain', 'TICKETBOX')
    cy.screenshot()

})

Cypress.Commands.add('ValidarBtnSubmit', () => {
    cy.xpath(loc.TICKETS.BTN_SUBMIT)
        .should('be.visible')
        .should('be.disabled')
        cy.screenshot()
})

Cypress.Commands.add('PreencherCampoDePNome', () =>{
    cy.fixture('UserData.json').then(function(data){
        this.data=data
        cy.get(loc.TICKETS.CMPO_FNAME).type(this.data.Fname)
    })    
})

Cypress.Commands.add('PreencherCampoDeLNome', () =>{
    cy.fixture('UserData.json').then(function(data){
        this.data=data
        cy.get(loc.TICKETS.CMPO_LNAME).type(this.data.Lname)
    })    
})
//
Cypress.Commands.add('PreencherCampoDeEmail', () =>{
    cy.fixture('UserData.json').then(function(data){
    this.data=data
        cy.get(loc.TICKETS.CMPO_EMAIL).type(this.data.Email)
    })            
})

Cypress.Commands.add('PreencherCampoDeQuantDeIngresso', () =>{
    cy.fixture('UserData.json').then(function(data){
    this.data=data
        cy.get(loc.TICKETS.CMPO_QTICKETS).select(this.data.Qingresso)
    })            
})

Cypress.Commands.add('PreencherCampoDeCheckBoxGeneralVip', () =>{
    cy.fixture('UserData.json').then(function(data){
    this.data=data
        cy.xpath(loc.TICKETS.CHBOX_GENERAL_VIP).click()
    })            
}) 
        
Cypress.Commands.add('PreencherCampoDeSelectFriends', () =>{
    cy.fixture('UserData.json').then(function(data){
    this.data=data
        cy.get(loc.TICKETS.CMBOX_FRIENDS).click()
    })            
})   
            
Cypress.Commands.add('PreencherCampoDeSelectPublico', () =>{
    cy.fixture('UserData.json').then(function(data){
    this.data=data
        cy.get(loc.TICKETS.CMBOX_PUBLIC).click()
    })            
})  

Cypress.Commands.add('PreencherCampoDeSelectSocialMedia', () =>{
    cy.fixture('UserData.json').then(function(data){
    this.data=data
        cy.get(loc.TICKETS.CMBOX_SOCIALMEDIA).click()
    })            
}) 

Cypress.Commands.add('PreencherCampoDePedidoEspecial', () =>{
    cy.fixture('UserData.json').then(function(data){
    this.data=data
        cy.get(loc.TICKETS.CMPO_PEDIDO_ESPEC).type(this.data.ReqEspecial)
    })            
})

Cypress.Commands.add('VerificarFrase', () =>{
    cy.fixture('UserData.json').then(function(data){
    this.data=data
        cy.get('p').should('contain', `I, ${this.data.Fname} ${this.data.Lname}, wish to buy ${this.data.Qingresso} VIP tickets. I understand that all ticket sales are final.`)
    })            
})

Cypress.Commands.add('ClicarNoCampoDeIGREE', () =>{
    cy.fixture('UserData.json').then(function(data){
    this.data=data
        cy.get(loc.TICKETS.SELECT_IGREE).click()
    })            
})

Cypress.Commands.add('PreencherCampoDeAssinatura', () =>{
    cy.fixture('UserData.json').then(function(data){
    this.data=data
        cy.get(loc.TICKETS.CMPO_ASSINATURA).type(this.data.signature)
        cy.screenshot()
    })            
})

Cypress.Commands.add('clicarBtnConfirm', (args1) => {
    var args1
        cy.xpath(`//*[contains(text(),'${args1}')]`).click()
}) 

Cypress.Commands.add('FerificaMensagem', (args1) => {
    var args1
    cy.xpath(`//*[contains(text(),'Ticket(s) successfully ordered.')]`)
        .should('be.visible')
        .should('contain', `${args1}`)
    cy.screenshot()
})

Cypress.Commands.add('VerificarCampos', () => {
    cy.get(loc.TICKETS.CMPO_FNAME)
        .should('be.visible')
        .should('be.empty')
    cy.get(loc.TICKETS.CMPO_LNAME)
        .should('be.visible')
        .should('be.empty')   
    cy.get(loc.TICKETS.CMPO_EMAIL)
        .should('be.visible')
        .should('be.empty')
    cy.xpath(loc.TICKETS.CHBOX_GENERAL_VIP)
        .should('be.visible')
        .should('not.be.checked')
    cy.get(loc.TICKETS.CMBOX_FRIENDS)
        .should('be.visible')
        .should('not.be.checked') 
    cy.get(loc.TICKETS.CMBOX_PUBLIC)
        .should('be.visible')
        .should('not.be.checked')  
    cy.get(loc.TICKETS.CMBOX_SOCIALMEDIA)
        .should('be.visible')
        .should('not.be.checked')  
    cy.get(loc.TICKETS.CMPO_PEDIDO_ESPEC)
        .should('be.visible')
        .should('be.empty')  
    cy.get(loc.TICKETS.SELECT_IGREE)
        .should('be.visible')
        .should('not.be.checked')
    cy.get(loc.TICKETS.CMPO_ASSINATURA)
        .should('be.visible')
        .should('be.empty')                              
})           


