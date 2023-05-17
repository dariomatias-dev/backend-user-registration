# Cadastro de usuários - Backend

<div style="display: inline_block">
  <img src="https://img.shields.io/badge/license-mit-green" />
  <img src="https://img.shields.io/badge/status%20-active-blue" />
</div>

## Projeto

## Como usar

### Caso queira baixar, testar ou alterar o projeto, siga os seguintes passos:

#### Clonar

Primeiro clone o repositório com: git clone [link HTTPS ou SSH do repositório]

Pode conseguir esse link acessando o repositório que quer clonar, e apertando em um botão verde com o nome "<> CODE".

#### Baixar dependências

Depois baixe todas as dependências necessárias: npm i

#### Rodar

Rode o projeto com: npm run dev

#### Usar banco de dados

OBS.: Será necessário ter o Docker instalado e configurado para esse passo.

No arquivo nomeado de ".env_template" estará o modelo das chaves para criar o banco de dados e acessar. Retire o "\_template" e cologue as credenciais de acesso que preferir.

Para criar e rodar o banco de dados, use o seguinte comando para criar o container: docker-compose up

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção desse projeto:

-   [TypeScript](https://www.typescriptlang.org/)
-   [Node.js](https://nodejs.org/pt-br/)
-   [Fastify](https://www.fastify.io/)
-   [TSX](https://github.com/esbuild-kit/tsx#readme/)
-   [Zod](https://zod.dev/)
-   [Prisma](https://www.prisma.io/)

<br/>

## Rotas

### GET: /users/count

Retorna o número de usuários cadastrados.

### GET: /user/:id

Retorna todos os dados do usuário especificado pelo id passado.

### GET: /users/:skip

Retorna 10 usuários, sendo o skip que dirá quantos usuários tem que pular.

### POST: /user

Cria o usuário com todos os dados passados no corpo da requisição.

### PATCH: /user/:id

Atualiza o usuário especificado pelo o id com os dados passados.

### DELETE: /user/:id

Delete o usuário que corresponde ao id passado.

## Autor

<img style="border-radius: 50%" src="./public/images/my-photo.png" width="100px" alt="My photo"/>

<sub>
  <b>Dário Matias</b>
</sub>

<br/>
  Entre em contato!
<br/>
<br/>

<a href="https://www.linkedin.com/in/d%C3%A1rio-matias-dales-gamma-587785243/" target="_blank">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>

<a href="https://www.instagram.com/dario_delta10/?theme=dark" target="_blank">
  <img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" />
</a>

<a href="https://wa.me/5583986404371">
  <img src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white" />
</a>

<a href="https://twitter.com/matiasdario752" target="_blank">
  <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" />
</a>

<a href="https://portfolio-dariomatias-dev.vercel.app/" target="_blank">
  <img src="https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white" />
</a>
