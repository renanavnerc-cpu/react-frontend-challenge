## Funcionalidade Pendente: Minha Lista (Watchlist)

### Descrição

Ainda não implementado: sistema de **Minha Lista (Watchlist)** para que o usuário possa adicionar ou remover filmes do seu dashboard de favoritos.

### Detalhes planejados:

- **Adicionar/Remover filmes**: Botão no card ou na tabela do dashboard.
- **Persistência**: Lista salva usando `Zustand` com middleware `persist`, mantendo os dados mesmo após reload da página.
- **Colunas da Tabela**:
  - Título
  - Gênero
  - Data de Lançamento
  - Rating
  - Ações (adicionar/remover)
- **Ordenação**: Possibilidade de ordenar a tabela por Título, Gênero ou Rating.
- **Botão no Dashboard**: Permitir adicionar ou remover filmes diretamente na tela principal.

### Observação sobre Git/Branches

Por um contratempo, **não criei branches separadas para cada funcionalidade**, como seria o ideal em um fluxo de trabalho correto. Todas as alterações foram feitas na branch principal.

> Esta funcionalidade será implementada futuramente, seguindo a mesma arquitetura de estado global e persistência já utilizada para tema e usuário.
