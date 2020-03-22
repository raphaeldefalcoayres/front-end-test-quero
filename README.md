# Teste de Front End da Quero Educação

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/raphaeldefalcoayres/lectures-backend/blob/master/LICENSE)

> URL back-end API hospedada no Heroku usando json-server: https://front-end-test-quero-api.herokuapp.com/scholarship

> URL front-end hospedada no Netilify: https://5e77607c2e5e9e000887927f--adoring-franklin-e7fb5d.netlify.com/

![Image of coverage](https://github.com/raphaeldefalcoayres/front-end-test-quero/blob/master/.github/demo.jpg)

<p>
  <a href="#requisitos-do-projeto">Requisítos</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#especificações-de-funcionalidades">Especificações</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#dados">Dados</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#critérios-de-avaliação">Critérios</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#sugestões-extras-não-obrigatórias">Extras</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#instalação">Instalação</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#contruído-com">Construído com</a>&nbsp;&nbsp;|&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

## Sobre o teste

### Introdução

O **Querobolsa.com** é um marketplace de bolsas de estudo, que já ajudou milhares de alunos a escolher e ingressar no curso ideal, por um preço que podem pagar.
A sua missão é fazer uma página onde o aluno possa filtrar bolsas de estudo de seu interesse e adicionar à uma lista de bolsas favoritas.

### Requisitos do projeto:

- Apenas código front-end será considerado nesse projeto: HTML5, CSS e Javascript.
- Pré-processadores CSS podem ser usados à vontade.
- Frameworks CSS não são permitidos. Todo código CSS deve ser escrito por você.
- O projeto pode ser escrito em javascript puro ou utilizar frameworks como Vue.js, React ou outro.
- Gerenciadores de pacotes e task runners podem ser usados à vontade.
- Ícones e imagens não precisam ser fiéis ao layout. Fique à vontade para utilizar a biblioteca de ícones de sua preferência. Nós recomendamos a versão gratuita do FontAwesome: https://fontawesome.com.
- O projeto precisa ser responsivo, respeitando os layouts que iremos disponibilizar.

### Especificações de funcionalidades:

- O projeto possui uma única página, com a lista de favoritos e um modal para a busca de cursos;
- Ao clicar em Adicionar curso, deve abrir o modal de busca;
- A busca deve conter os seguintes filtros:
  - Cidade;
  - Curso;
  - Modalidade (Presencial/EaD);
  - Preço;
- A lista de cursos deve ter ordenação por nome da faculdade;
- Múltiplos cursos podem ser selecionados e adicionados à lista de favoritos;
- O botão Adicionar bolsa(s) deve ficar desabilitado enquanto não houver cursos selecionados;
- Os cursos podem ser removidos da lista de favoritos, através do botão Excluir;
- O botão Ver oferta não leva a lugar algum;
- Bolsas com { enabled: false }, devem aparecer com o botão Indisponível;
- A lista de favoritos deve respeitar o semestre selecionado.

### Dados:

A estrutura do JSON é a seguinte:

    "full_price": float,
    "price_with_discount": float,
    "discount_percentage": float,
    "start_date": string,
    "enrollment_semester": string,
    "enabled": boolean,
    "course": {
      "name": string,
      "kind": string,
      "level": string,
      "shift": string
    },
    "university": {
      "name": string,
      "score": float,
      "logo_url": string
    },
    "campus": {
      "name": string,
      "city": string

### Critérios de avaliação:

- Fidelidade ao layout solicitado;
- Fidelidade às funcionalidades solicitadas;
- HTML estruturado de forma semântica;
- Clareza de nomenclatura do CSS;
- Adesão ao mobile first.

### Sugestões extras (não obrigatórias):

- Desenvolvimento de testes;
- Seguir algum style guide de Javascript;
- Seguir algum style guide de CSS;
- Componentização e extensibilidade dos componentes Javascript;
- Persistir a lista de favoritos no browser do cliente;
- Aplicar animações de transição.

## Sobre a aplicação

### Prerequisites

O que você precisa para instalar o software

```
Uma versão atualizada e estavel do node, npm ou yarn
```

### Instalação

Um passo a passo que mostra como obter um ambiente de desenvolvimento em execução

Primeiro

```
Clone o projeto
```

Segundo

```
Execute `yarn` or `npm install` para instalar as dependências
```

Terceiro

```
Duplique `.env.example` para criar o `.env` com suas configurações básicas
```

Finalizando

```
Execute `yarn start` or `npm run start` para executar o projeto
```

### Contruído com

- [React](https://pt-br.reactjs.org/?fbclid=IwAR0qox-iLijSa20vGDex2DoJ9IgwyE4YG7BzA8L3s7grsqSXyXGmyNVnJ2I) - Uma biblioteca JavaScript para criar interfaces de usuário.
- [React Icons](https://github.com/react-icons/react-icons) - Icones SVG para react de pacotes populares.
- [Styled Components](https://www.styled-components.com/) - É uma biblioteca para React e React Native que permite que você use estilos ao nível de componente na sua aplicação.
- [Eslint](https://eslint.org/) - Encontra e corrija problemas no seu código JavaScript.
- [Prettier](https://prettier.io/) - Prettier é um formatador de código opinativo.
- [EditorConfig](https://editorconfig.org/) - EditorConfig ajuda a manter estilos de codificação consistentes para múltiplos desenvolvedores.
- [Date-fns](https://date-fns.org/) - Biblioteca de utilitários de data para JavaScript moderno.
- [Lodash](https://lodash.com/) - Uma moderna biblioteca de utilitários JavaScript que oferece modularidade, desempenho e extras.

## Licença

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
