# NPS
🚀NPS is a Net Promoter Score is a customer loyalty metric🚀



## 🛠 Tecnologias/Linguagens

As seguintes ferramentas foram usadas na construção do projeto::


-  **[TypeScript](https://golang.org)**
-  **[React](https://pt-br.reactjs.org)**
-  **[NestJs](https://nestjs.com)**
-  **[Handlebars](https://handlebarsjs.com)**
-  **[SQLite](https://www.sqlite.org/index.html)**
-  **[jest](https://jestjs.io/pt-BR/)**
-  **[Yarn](https://yarnpkg.com)**
-  **[TypeOrm](https://typeorm.io/#/)**
-  **[Express](https://expressjs.com/pt-br/)**
-  **[NodeMailer](https://nodemailer.com/about/)**


<br/>

## ⤵ Comandos para começar

Essas instruções vão te levar a uma cópia do projeto rodando em sua máquina local para propósitos de testes e desenvolvimento. Foram implementados testes de integração.

Obs: Banco de dados é o Sqlite3, caso queira alterar, configure o arquivo ormconfig.json para seu banco de dados específico (Campo "database" é o nome do banco de dados no SGBD, neste projeto é local).

```bash
- git clone https://github.com/GCarin1/NPS.git
- cd NPS
```

Instalando dependências

```bash
- npm install
```

ou

```bash
- yarn install
```

Gerar o arquivo de database.sqlite do Sqlite3, onde ficaram armazenados as tabelas da API

```bash
- yarn startTestDB
```

Criando tabela das migrations do Sqlite3 por meio do cli do TypeOrm

```bash
- yarn typeorm migration:run
```

Inicializando uma instância local (Script configurado no package.json)

```bash
- yarn dev
```

ou

Gerando a build (Script configurado no package.json)
```bash
- yarn start
```

## ⤵ Testes

Para testar se instalou a aplicação corretamente e se passa em todos os testes de integração, utilize o comando:

```bash
- yarn test
```



## 🤔 Como contribuir

```bash
- Faça um fork desse repositório: `https://github.com/GCarin1/NPS.git`;
- Cria uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`; 
- Faça push para a sua branch: `git push origin minha-feature`.

Depois que o merge da sua pull request ser feito, você pode deletar a sua branch. 
```

## 📝 Licença

Este projeto está sob a licença [MIT](./LICENSE).

---
<h4 align=center>✨Feito por <a href="https://www.linkedin.com/in/guilherme-carini/">Guilherme Carini ✨</a></a></h4>
