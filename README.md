# NLW-PRISMA

## Conteúdo
* [Sobre a Aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre a aplicação
Aplicação desenvolvida em Node.js + Prisma ORM durante o NLW Return, promovido pela Rocketseat.<br />
Durante o evento, foram desenvolvidas 3 aplicações, uma [aplicação React](https://github.com/luiizsilverio/nlw-widget/edit/main/README.md), um [App em React Native](https://github.com/luiizsilverio/nlw-mobile) e esta API.<br />
A API possui apenas uma rota POST (/feedbacks), para gravar os feedbacks em um banco de dados PostgreSQL.<br />
Além disso, envia e-mail para um serviço de e-mail fake (MailTrap), que poderia ser substituído por qualquer outro serviço de e-mail real, como o MailGun, por exemplo.<br />
Durante o evento, também foram criados alguns testes com Jest, além de aplicar alguns conceitos de SOLID.<br />
Esta aplicação está rodando na [Railway](https://railway.app), neste [Endereço](https://nlw-widget-snowy.vercel.app).
<br />

## :hammer_and_wrench: Tecnologias
* __Node.js__ + __Typescript__
* __Prisma-Client__ para acessar o banco
* __NodeMailer__ + __MailTrap__ para enviar e-mail
* __Jest__ para testes unitários

## :car: Iniciando a aplicação
```bash
# Baixe o repositório com git clone e entre na pasta do projeto.
$ git clone hhttps://github.com/luiizsilverio/nlw-prisma

# Renomeie o arquivo .env-example para .env e informe o caminho do banco em DATABASE_URL.

# Execute npm install para instalar as dependências
$ npm install

# Para iniciar a aplicação na porta 3333
$ npm run dev
```

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
