# LabenuSystem:

### Projeto para criar um banco de dados dos alunos, docentes e turmas da escola Labenu, com a API que faz o endereçamento das informações.

## Descrição do projeto:

Através dos endpoints do projeto é possível realizar as seguintes ações no banco de dados, que são as funcionalidades básicas propostas:

→ Criar estudante;

→ Criar docente;

→ Criar turma;

→ Buscar as turmas ativas;

→ Buscar todos os alunos da escola;

→ Buscar alunos por nome;

→ Buscar todos os instrutores;

→ Mudar o módulo da turma;

→ Adicionar estudante na turma;

→ Adicionar docente na turma;

Utilizamos o MySQL para criação do nosso banco de dados através do populate no NodeJS, e também o Typescript para a construção da lógica dos enpoints da nossa API. Passamos ao longo do processo de criação da API pela dificuldade de como filtrar os dados do banco de dados usando o query builder e como realizar a busca da data de nascimento dos docentes e dos alunos no formato correto que seria DD/MM/AAAA, para entregar os dados da melhor forma possível para a pessoa que estaria consumindo os dados da API no Front-End. 

## Como usar o projeto localmente:

Faça o clone do respositório através do GitClone do GitHub e do Git na sua máquina. Após criar a pasta do repositório com os arquivos, abra o terminal Git no VSCode e rode o comando:

```bash
npm install 
```
Já existe um arquivo rest para testar os endpoints com todos os endpoints que foram desenvolvidos e a descrição das funções que realizam, mas se desejar também é possível realizar os testes através do Postman rodando nos scripts npm o comando dev start que roda o servidor localmente em:  http://localhost:3003

## Referências da API:
Aqui listaremos a documentação dos endpoints da API e seu comportamento esperado.

### endpoint que cria classes
POST  /class

Neste endpoint é necessário passar as seguintes informações no body da requisição. Ele envia uma mensagem de sucesso ao cadastrar a turma.
```bash
{   
    "name": "Lovelace",
    "module":"0"
}
```


### endpoint criar aluno
POST  /student

Neste endpoint é necessário passar as seguintes informações no body da requisição. Ele envia uma mensagem de sucesso ao cadastrar o aluno.

```bash
{
    "name": "Lucas Txai",
    "email": "balatensa@gmail.com",
    "birthDate": "16/05/1995",
    "id_class":"68a4897f-0126-4f8f-ad68-5ba3eaf4690d"
}
```

### endpoint criar instrutor
POST  /instructor

Neste endpoint é necessário passar as seguintes informações no body da requisição. Ele envia uma mensagem de sucesso ao cadastrar o instrutor.
```bash
{
    "name": "Jessica Bento",
    "email": "jessica_bento@gmail.com",
    "birthDate": "16/05/1997",
    "id_class":"68a4897f-0126-4f8f-ad68-5ba3eaf4690d"   
}
```

### endpoint pegar turmas ativas
GET  /class/active

Neste endpoint é possível buscar todas as turmas que estão ativas, ou seja, que possuem modulos acima de 0.

### endpoint pegar todos os alunos
GET  /student/all

Neste endpoint é possível buscar todos os alunos da escola.

### endpoint pegar alunos pelo nome
GET  /student?name=Lucas

Neste endpoint é possível buscar alunos pelo nome através da query.

### endpoint pegar todos os instrutores
GET  /instructors/all

Neste endpoint é possível buscar todos os instrutores da escola.

### endpoint para mudar o modulo da turma
PUT /class/module

Neste endpoint é necesário enviar as seguintes informações no body da requisição. Será enviada uma mensagem de sucesso ao realizar a alteração.
```bash
{
    "id":"68a4897f-0126-4f8f-ad68-5ba3eaf4690d",
    "module": "7"
}
```

### endpoint para mudar o instrutor de turma
PUT /instructor/class

Neste endpoint é necesário enviar as seguintes informações no body da requisição. Será enviada uma mensagem de sucesso ao realizar a alteração.
```bash
{
    "id": "5a7e728a-3afa-47d6-850d-0fba7786e6a7",
    "id_class": "6a84572b-357b-495c-80ad-1f777ed1e7a1"
}
```

### endpoint para mudar um aluno de turma
PUT  /student/class

Neste endpoint é necesário enviar as seguintes informações no body da requisição. Será enviada uma mensagem de sucesso ao realizar a alteração.
```bash
{
    "id": "4d3bc362-f838-43d6-9e06-5f3883873f74",
    "id_class": "68a4897f-0126-4f8f-ad68-5ba3eaf4690d"
}
```

## Possiveis mensagens de erro

A API pode retornar as seguintes mensagens de erro de acordo com as falhas na requisição:

```bash
400: Bad Request
404: Not Found
500: Internal Server Error

```
