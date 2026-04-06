# Instruções do Projeto CineDash

## Projeto Escolhido

- Opção A: **CineDash (Filmes)**
- Dashboard de curadoria de filmes com busca, filtros avançados e paginação.

---

## Funcionalidades Implementadas

- Autenticação simulada (login com Zod e token fictício)
- Dashboard de filmes trending/populares
- Filtros avançados: Nome, Gênero, Ano, Rating
- Busca com debounce
- Paginação com botões
- Skeletons para loading e tratamento de erros
- Persistência de filtros e página usando Zustand
- Layout responsivo
- Testes unitários para hooks e serviços (Vitest)

---

## Como Rodar o Projeto

1. **Clonar o repositório**

```bash
git clone <seu-repo-url>
cd <nome-do-repo>

---

## Instalar dependências

npm install

## crie o arquivo .env e adicione as credenciais da api
VITE_TMDB_API_KEY=d8b04452fdcd43835f99a1fba32de204

## Rodar o projeto em modo desenvolvimento

npm run dev

## Abrir no browser
http://localhost:5173
```
