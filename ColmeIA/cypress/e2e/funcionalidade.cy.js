describe('Testes de Funcionalidade/Telas', () => {
  it('Login sucesso', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')
    cy.get('[name="email"]').type('qa@test.com') // Email correto - Sucesso
    cy.get('[name="password"]').type('123456') // Senha correta - Sucesso
    cy.wait(1000)
    cy.get('.p-16 > .flex-col > .flex').click() // Login com email e senha corretos - Sucesso
    // Pop out de login incorreto, mesmo com email e senha corretos, aparece o pop out de login incorreto, mas o usuário é redirecionado para a tela de dashboard, ou seja, o login é bem sucedido, mas o pop out de login incorreto aparece erroneamente.
    cy.wait(1000)
    cy.get('.fixed > .flex-col > .flex').click() // confirmar o pop out de login incorreto - Sucesso
  })
    it('Dashboard', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard')
    cy.get('.ml-3 > .flex').click() // Icone de candidato - Fracasso, mesmo clicando no botão para acessar a tela de candidato, a tela de candidato não é exibida, o que indica um possível problema de navegação ou carregamento da página.
    cy.get('.ml-3').click() // Icone de candidato - Fracasso, mesmo clicando no botão para acessar a tela de candidato, a tela de candidato não é exibida, o que indica um possível problema de navegação ou carregamento da página.
    cy.get('.flex-col > .flex').click() // Icone de campanha - Sucesso, ao clicar no ícone de campanha, a tela de campanha é exibida corretamente, indicando que a navegação para a tela de campanha está funcionando como esperado.

  })
    it('Campanha', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard/campanha')
    cy.get('menu > .flex > :nth-child(1)').click() // Botao para acessar tela do banco de dados - Sucesso, ao clicar no botão para acessar a tela do banco de dados, a tela do banco de dados é exibida corretamente, indicando que a navegação para a tela do banco de dados está funcionando como esperado.
    cy.get('menu > .flex > :nth-child(2)').click() // Botao para acessar tela de Forms - Fracasso, mesmo clicando no botão para acessar a tela de Forms, a tela de Forms não é exibida, o que indica um possível problema de navegação ou carregamento da página, nao exibe informação.
  })
    it('Bancos de Dados', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/dashboard/campanha/bancos-de-dados')
    cy.get('.py-1 > :nth-child(2) > .gap-2').click() 
    cy.get('.flex-col > div.w-full > .w-full').type('Teste')
    cy.get('.fixed > .flex-col > .flex').click()
    cy.wait(1000)
    cy.get('.text-red-100').click() // Excluir item do banco de dados - Sucesso
    cy.wait(1000)
    cy.get('.py-1 > :nth-child(2) > .gap-2').click()
    cy.get('.flex-col > div.w-full > .w-full').type('Teste')
    cy.get('.fixed > .flex-col > .flex').click()
    cy.wait(1000)
    cy.get('.text-blue-100').click() // Arquivar item do banco de dados - Sucesso]
    cy.get('.py-1 > :nth-child(1) > .justify-center').click() // Botao para itens arquivados - sucesso 
    // Não aparece os itens arquivados, mesmo clicando no botão para exibir os itens arquivados.
  })
    it('Login falha bem sucedido', () => {
    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')
    cy.get('[name="email"]').type('qa@test.com') // Email correto - Sucesso
    cy.get('[name="password"]').type('123456789') // Senha incorreta - Sucesso
    cy.wait(1000)
    cy.get('.p-16 > .flex-col > .flex').click() // Login com senha incorreta - Sucesso
    cy.get('.mt-4').click() // Botão esqueceu minha senha - Fracasso
  })
})