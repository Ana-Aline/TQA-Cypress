describe('Login de acesso', () => {
  it('Acessar a tela de login', () => {
    cy.visit('https://automacao.qacoders-academy.com.br/login')
    cy.contains('Login')
  })
})