### Testes de Automação - Colmeia QA
Este repositório contém testes funcionais para a plataforma Colmeia.

**Bugs Encontrados durante a automação:**
*   **Login:** Exibe pop-up de erro mesmo com credenciais válidas (redireciona corretamente, mas confunde o usuário).
*   **Dashboard:** Ícone de candidato não abre a tela correspondente.
*   **Campanha:** Botão de "Forms" não carrega informações.
*   **Banco de Dados:** Itens arquivados não são listados na tela de arquivados.

**Como rodar:**
1. `npm install`
2. `npx cypress run` (para modo headless) ou `npx cypress open` (para modo interface).