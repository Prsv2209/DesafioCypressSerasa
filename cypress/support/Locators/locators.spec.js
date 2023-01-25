const locators = {

    TICKETS:
    {
        URL:                        'https://ticket-box.s3.eu-central-1.amazonaws.com/index.html',
        LB_TICKETBOX:               'h1',
        CMPO_FNAME:                 '#first-name',
        CMPO_LNAME:                 '#last-name',
        CMPO_EMAIL:                 '#email',
        CMPO_QTICKETS:              '#ticket-quantity',
        CHBOX_GENERAL_VIP:          '//*[@type=\'radio\'][@id=\'vip\']',
        CMBOX_FRIENDS:              '#friend',
        CMBOX_PUBLIC:               '#publication',
        CMBOX_SOCIALMEDIA:          '#social-media',
        CMPO_PEDIDO_ESPEC:          '#requests',
        SELECT_IGREE:               '#agree',
        CMPO_ASSINATURA:            '#signature',
        BTN_RESET:                  '//button[@type="reset"]',
        BTN_SUBMIT:                 '//button[@type=\'submit\']'
    }
}
export default locators



