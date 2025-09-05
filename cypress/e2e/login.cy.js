describe('Login', () => {
    it('Realizar Login com sucesso', () => {
        // Arrange
        cy.visit('https://www.saucedemo.com/')

        // Act
        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

        // Assert
        cy.url().should('eq', 'https://www.saucedemo.com/inventory.html')
    })

    it('Realizar login informando credenciar inválidas', () => {
         // Arrange
        cy.visit('https://www.saucedemo.com/')

        // Act
        cy.get('[data-test="username"]').type('user.invalido')

        cy.get('[data-test="password"]').type('secret_invalida')

        cy.get('[data-test="login-button"]').click()

        // Assert
        cy.get('[data-test="error"]')
            .should(
                'contain.text',
                'Username and password do not match any user in this service'
            )
        cy.url().should('eq', 'https://www.saucedemo.com/')    
    })
})