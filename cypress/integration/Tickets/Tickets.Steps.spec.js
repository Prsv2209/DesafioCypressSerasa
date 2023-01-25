//import loc from "../../support/Locators/locators.spec";

beforeEach(() => {
	cy.fixture('UserData.json').then(function(data){this.data=data
	cy.visit(this.data.BaseUrl)
	})       
});
	
		Given(/^Que eu esteja na plataforma de TICKETBOX$/, () => {
			cy.ValidarLabel()
		});

		When(/^Preencho todos os campos pertinentes com informações validas$/, () => {
			cy.PreencherCampoDePNome()
			cy.PreencherCampoDeLNome()
			cy.PreencherCampoDeEmail()
			cy.PreencherCampoDeQuantDeIngresso()
			cy.PreencherCampoDeCheckBoxGeneralVip()
			cy.PreencherCampoDeSelectFriends()
			cy.PreencherCampoDeSelectPublico()
			cy.PreencherCampoDeSelectSocialMedia()
			cy.PreencherCampoDePedidoEspecial()
			cy.VerificarFrase()
			cy.ClicarNoCampoDeIGREE()
			cy.PreencherCampoDeAssinatura()
		});

		When(/^Clico no botao "([^"]*)"$/, (args1) => {
			cy.clicarBtnConfirm(args1)
		});

		Then(/^A plataforma apresenta a seguinte mensagem "([^"]*)"$/, (args1) => {
			cy.FerificaMensagem(args1)
		});


		Then(/^A plataforma apaga todas as informações dos campos$/, () => {
			cy.VerificarCampos()
			cy.ValidarBtnSubmit()
		});
