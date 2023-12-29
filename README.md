# Visão Geral do Projeto

## Tecnologias Utilizadas

- TypeScript
- Drizzle
- ElysiaJS

## Compatibilidade com Runtimes

Projetado para funcionar no Bun, Node, Cloudflare Workers ou qualquer runtime compatível com a Web Standard API.

## Configuração do Banco de Dados

Dependente do Docker para a configuração do banco de dados. Comandos para configuração:

```bash
bun i
docker compose up -d
bun migrate
bun seed
bun dev
```

## Recursos

### Gestão de Restaurante

- [] Registrar um novo restaurante.
- [] Entrar como gerente de restaurante.
- [] Gerenciar o menu do restaurante.
- [] Gerenciar avaliações do restaurante.
- [] Atualizar o perfil público do restaurante.
- [] Abrir/fechar o restaurante.
- [] Listar métricas do restaurante.

### Gestão de Usuários

- [] Registrar-se como novo cliente.

### Gestão de Pedidos

- [] Criar um pedido para o restaurante.
- [] Gerenciar pedidos do restaurante.

### Sistema de Avaliação

- [] Deixar uma avaliação.

## Testes

Testes de Ponta a Ponta (E2E) cobrem todos os recursos listados.

## Como Executar

- Clonar o projeto.
- Instalar dependências.
- Configurar contêineres Docker.
- Executar migrações para criar tabelas no banco de dados.
- Executar seed para popular o banco de dados com dados fictícios.
- Executar a aplicação no modo de desenvolvimento.

```bash
    bun i
    docker compose up -d
    bun migrate
    bun seed
    bun dev
```

### Observação

Certifique-se de que o Docker está instalado.

### Funcionalidades Adicionais (Em Breve)

- [] Sistema de Recomendação: Implementar um sistema de recomendação para sugerir pratos com base no histórico de pedidos do usuário.
- [] Rastreamento em Tempo Real: Adicionar funcionalidade de rastreamento em tempo real para que os usuários possam acompanhar a entrega de seus pedidos.
- [] Integração com Pagamentos Móveis: Incorporar métodos de pagamento móvel, como Apple Pay, Google Pay, ou outros métodos populares na região.
- [] Programa de Fidelidade: Criar um programa de fidelidade para recompensar clientes frequentes com descontos, ofertas especiais ou brindes.
- [] Suporte a Chat ao Vivo: Introduzir um sistema de chat ao vivo para que os usuários possam se comunicar diretamente com os restaurantes em tempo real.
- [] Personalização de Pedidos: Permitir que os usuários personalizem seus pedidos, adicionando observações ou fazendo modificações nos pratos.
- [] Integração com Redes Sociais: Facilitar o compartilhamento de avaliações e pedidos nas redes sociais, aumentando a visibilidade do aplicativo.
- [] Notificações Push Personalizadas: Implementar notificações push personalizadas para informar os usuários sobre ofertas especiais, status de pedidos e - [] atualizações relevantes.
- [] Avaliações Multidimensionais: Ampliar o sistema de avaliações para incluir categorias específicas, como velocidade de entrega, qualidade da embalagem, etc.
- [] Ofertas Relâmpago: Introduzir ofertas relâmpago ou descontos especiais em horários estratégicos para impulsionar as vendas.
- [] APIs Abertas para Parceiros: Disponibilizar APIs abertas para que restaurantes parceiros possam integrar seus sistemas diretamente ao aplicativo.
- [] Inteligência Artificial para Previsão de Pedidos: Utilizar IA para prever a demanda e otimizar os estoques dos restaurantes.

Supabase

api-elysia-drizzle
Password: cgNyOVxyYVqQTLuS

## English

**Restaurants table:**

- id: int (primary key)
- name: varchar(255)
- public_profile: text
- open: boolean
- metrics: jsonb (to store complex metrics)

**Managers table:**

- id: int (primary key)
- name: varchar(255)
- restaurant_id: int (foreign key to Restaurants table)

**Menus table:**

- id: int (primary key)
- restaurant_id: int (foreign key to Restaurants table)
- dish: varchar(255)
- description: text
- price: decimal

**Reviews table:**

- id: int (primary key)
- restaurant_id: int (foreign key to Restaurants table)
- user_id: int (foreign key to Users table)
- rating: int
- comment: text

**Users table:**

- id: int (primary key)
- name: varchar(255)
- email: varchar(255)
- password: varchar(255)

**Orders table:**

- id: int (primary key)
- user_id: int (foreign key to Users table)
- restaurant_id: int (foreign key to Restaurants table)
- status: varchar(255)
- total: decimal
- details: jsonb (to store complex order details)

## Português

**Tabela Restaurantes:**

- id: int (chave primária)
- nome: varchar(255)
- perfil_publico: text
- aberto: boolean
- metricas: jsonb (para armazenar métricas complexas)

**Tabela Gerentes:**

- id: int (chave primária)
- nome: varchar(255)
- restaurante_id: int (chave estrangeira para a tabela Restaurantes)

**Tabela Menus:**

- id: int (chave primária)
- restaurante_id: int (chave estrangeira para a tabela Restaurantes)
- prato: varchar(255)
- descricao: text
- preco: decimal

**Tabela Avaliacoes:**

- id: int (chave primária)
- restaurante_id: int (chave estrangeira para a tabela Restaurantes)
- usuario_id: int (chave estrangeira para a tabela Usuarios)
- avaliacao: int
- comentario: text

**Tabela Usuarios:**

- id: int (chave primária)
- nome: varchar(255)
- email: varchar(255)
- senha: varchar(255)

**Tabela Pedidos:**

- id: int (chave primária)
- usuario_id: int (chave estrangeira para a tabela Usuarios)
- restaurante_id: int (chave estrangeira para a tabela Restaurantes)
- status: varchar(255)
- total: decimal
- detalhes: jsonb (para armazenar detalhes complexos do pedido)
