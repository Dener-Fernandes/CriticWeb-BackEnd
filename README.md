# CriticWeb BackEnd

Esta aplicação foi desenvolvida utilizando Node.js, um ambiente de tempo de execução JavaScript de código aberto que é amplamente utilizado para construir aplicativos de rede escaláveis.

## Instalação

1. Clone o repositório:
   - `git clone https://github.com/Dener-Fernandes/CriticWeb-BackEnd.git`.

2. Instale as dependências:
   - `npm install`.

3. Adicione as variáveis de ambiente:
   - É necessário criar um arquivo `.env` seguindo o formato do arquivo `.env.example`. Adicione as informações de acordo com os nomes das variáveis.

4. Criar banco de dados:
   - É necessário ter o Postgres instalado na sua máquina. A interface gráfica pode ser de sua preferência DBeaver, PgAdmin. Crie um banco e um schema, os nomes devem ser os mesmos definidos no arquivo `.env`.
  
5. Executar as migrations:
   - É necessário executar as migrations para que as entidades do banco de dados sejam criadas. Utilize o comando: `npm run typeorm`.

6. Rodar a aplicação.
   - `npm run start:dev`.
