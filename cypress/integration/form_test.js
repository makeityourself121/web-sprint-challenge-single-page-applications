describe('single page applications', ()=>{

    beforeEach(()=>{
        cy.visit('http://localhost:3000/pizza')
    })

    const textInput=()=>cy.get('input[name=name]')
    const peppCheck=()=>cy.get('input[name=pepperoni]')
    const sauCheck=()=>cy.get('input[name=sausage]')
    const sizeCheck=()=>cy.get('select[name=size]')
    const special=()=>cy.get('input[name=special]')
    const submit=()=>cy.get('button[id="order-button"]')

    it('check text input',()=>{
        textInput()
        .should('have.value','')
        .type('order')
        .should('have.value','order')
    })

    it('check toppings pepperoni',()=>{
        peppCheck()
        .click()
    })

    it('check toppings sausage',()=>{
        sauCheck()
        .click()
    })

    it('check size dropdown',()=>{
        sizeCheck()
        .select('small')
    })

    it('check special instructions',()=>{
        special()
        .type('special instructions here')
        .should('have.value','special instructions here')
    })

    it('check submit button', ()=>{
        submit()
        .should('be.disabled')
    })
   
})