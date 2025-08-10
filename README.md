# Trainee_iJunior

🎵 Projeto Trainee iJunior - API de Músicas
📝 Descrição
Este projeto consiste numa API para um sistema de gestão de músicas, semelhante ao Spotify, desenvolvido como parte do programa de trainee da iJunior. A aplicação permite a manipulação de dados de músicas, artistas e utilizadores, persistindo as informações numa base de dados através de um ORM.

✨ Funcionalidades Principais
O projeto implementa as operações de CRUD (Create, Read, Update, Delete) para as seguintes entidades:

Gestão de Artistas: Criar, listar, atualizar e apagar artistas.

Gestão de Utilizadores: Criar, listar, atualizar e apagar utilizadores.

Relações: Associa músicas aos seus respetivos artistas e gere as interações dos utilizadores com as músicas.

🛠️ Tecnologias Utilizadas
Runtime: Node.js (v22.17.0)

Linguagem: TypeScript

Gestor de Pacotes: npm (v10.9.2)

ORM: Prisma (v6.13.0)

Base de Dados: SQLite

Framework Web: Express

Linter: ESLint

🚀 Como Executar o Projeto
Siga os passos abaixo para configurar e executar o projeto no seu ambiente de desenvolvimento.

Pré-requisitos
Antes de começar, certifique-se de que tem o Node.js (versão 22.x ou superior) e o Git instalados na sua máquina.

Instalação
Clone o repositório:

```Bash

git clone [URL_DO_VOSSO_REPOSITORIO_AQUI]
Navegue para a pasta do projeto:
```

```Bash

cd [NOME_DA_PASTA_DO_PROJETO]
Instale as dependências:
```

```Bash

npm install
```

Configuração da Base de Dados
Este projeto usa SQLite, pelo que não é necessário instalar um servidor de base de dados.

Crie uma cópia do ficheiro .env.example (se existir) e renomeie-a para .env. Se não existir, crie um ficheiro .env e adicione a seguinte linha:

Snippet de código

DATABASE_URL="file:./dev.db"
Execute as migrações do Prisma para criar o ficheiro da base de dados e as tabelas:

Bash

npx prisma migrate dev
Execução
Para iniciar a aplicação em modo de desenvolvimento (com reinício automático), execute:

Bash

npm run dev
A API estará agora a correr e pronta a aceitar pedidos.

👥 Equipa
Déborah Mirela (@DeborahMirela)

Arthur Felipe (@Saliv07)

Lucas Hermínio (@herminions)
