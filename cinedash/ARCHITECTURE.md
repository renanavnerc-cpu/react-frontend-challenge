# Arquitetura do Projeto CineDash

## Visão Geral

O projeto **CineDash** é um dashboard de curadoria e descoberta de filmes, construído utilizando **React 18+**, **TypeScript** e **Vite**. O objetivo principal é demonstrar uma arquitetura escalável, limpa e modular, seguindo princípios de **Clean Architecture** e **Feature-Sliced Design (FSD)**.

---

## Estrutura de Pastas
src
├── features
│ └── movies
│ ├── components # Componentes reutilizáveis do módulo de filmes
│ ├── hooks # Hooks customizados (ex: useMovies)
│ ├── pages # Páginas específicas do módulo
│ ├── services # Serviços de API (TMDB)
│ └── store # Estado global com Zustand (filters, page)
├── shared
│ ├── components # Componentes globais (Header, Footer, etc.)
│ ├── layouts # Layouts (AppLayout)
│ └── config # Configurações, constantes (TMDB_API_KEY, baseURL)
├── types # Tipagens globais (Movie, MoviesResponse, Filters)
└── App.tsx # Entrada da aplicação


- **Features**: cada feature é modular e contém tudo relacionado à sua funcionalidade.  
- **Shared**: componentes e layouts reutilizáveis em todo o app.  
- **Store (Zustand)**: gerenciamento de estado global para filtros e paginação.  

---

## Decisões Técnicas

### Gerenciamento de Estado
- **Server State**: TanStack Query, para cache, revalidação e fetch eficiente da API do TMDB.
- **Client State**: Zustand, para filtros globais, página atual e persistência de sessões.
- **Motivo**: evita prop drilling e mantém o dashboard reativo e escalável.

### Filtros e Busca
- Filtros armazenados no **store global** (`useMoviesStore`) permitindo que qualquer componente possa ler e atualizar filtros.  
- Busca implementada com **debounce** para não gerar flood na API.  
- Filtros suportam: **Nome (original_title)**, **Gênero**, **Ano de lançamento** e **Rating mínimo**.

### Componentização
- Separação clara entre **UI** (`components`) e **lógica** (`hooks`).  
- Skeletons para loading e tratamento de erros em listas.  
- Layout responsivo utilizando TailwindCSS e componentes Shadcn/UI.

### Rotas
- TanStack Router, com rotas para Dashboard e página de detalhes do filme.  

### Autenticação
- Implementada **simuladamente** no front-end, sem backend:
  - Tela de login valida email e senha usando Zod.
  - Gera token fictício e salva no `localStorage`.
  - Verificação de autenticação protege rotas sensíveis.
  - Sessão persistente ao recarregar a página.
- Motivo: demonstra controle de acesso e persistência de estado sem depender de backend.

### Testes
- **Vitest + React Testing Library**:
  - Hooks complexos (`useMovies`) testados com mocks de fetch.
  - Serviços (`moviesService`) testados para diferentes filtros e respostas da API.
  - Testes focam em regras de negócio e confiabilidade.

---

## Considerações de Escalabilidade
- Arquitetura modular permite adicionar novas features (ex: usuários, recomendações) sem impactar o código existente.  
- Store global facilita sincronizar estado entre múltiplos componentes.  
- TanStack Query garante cache e pré-fetching eficiente, reduzindo chamadas redundantes à API.

---

**Resumo:**  
A aplicação segue princípios de Clean Code, FSD e arquitetura escalável, garantindo manutenibilidade e facilidade para adicionar novas funcionalidades.
