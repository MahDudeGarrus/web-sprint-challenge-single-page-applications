// cypress testing here


// connecting the server to test
describe('opening test for pizza link', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const textInput = () => cy.get('#name-input')
    const checkboxCheck = () => cy.get('.toppingsChoice')
    const clickSubmit = () => cy.get('#order-button')

    // checking that test is linked and working
    it('sanity checks', () => {
        expect(12).to.equal(12)
        expect(4 + 9).to.equal(13) 
    })

    // test for text input in name input
    it('adding text to textbox', () => {
        textInput().should('exist')
            .type('Stephanie Solis')
            .should('have.value', 'Stephanie Solis')
    })

    // test for toppings checkbox
    it('checking checkboxes for toppings', () => {
        checkboxCheck().should('exist')
            .check()
            .uncheck()
    })

    it('validating the submit button', () => {
        clickSubmit().should('exist')
        textInput().type('blahblahblah')
        clickSubmit().click()
        textInput().should('have.value', '')

    })

})