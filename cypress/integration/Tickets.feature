Feature: Tickets
    Eu como usuario, desejo utilizar a plataforma de compra de Tickets
    Para que eu possa assitir um evento

@Fluxo_Feliz @TICKETBOX
Scenario: Compra de ingressos
    Given Que eu esteja na plataforma de TICKETBOX
    When Preencho todos os campos pertinentes com informações validas
    And Clico no botao "Confirm Tickets"
    Then A plataforma apresenta a seguinte mensagem "Ticket(s) successfully ordered."

@Btn_Reset @TICKETBOX
Scenario: Validar Uso do botao reset
    Given Que eu esteja na plataforma de TICKETBOX
    When Preencho todos os campos pertinentes com informações validas
    And Clico no botao "Reset"
    Then A plataforma apaga todas as informações dos campos
