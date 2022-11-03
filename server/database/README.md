# DATABASE

## Prerequisite

First of all, you need to generate a copy of the env file and add your environment variable such as the database host, name ect..
To do so, run <br>
`cp .env.example .env`

Note : the NODE_ENV variable is initially set to development at the beggining

## Architecture of the directories

In order to handle database, there are 4 folders you can work with :
- **config** : the configuration of the database to take according to the NODE_ENV environment variable.
- **migrations** : the files to perform database actions(create Table, add a columns)
- **model** : The files which describes a Table in the base.
- **seeders** : the initial data in the tables.

## Create Model

In order to create a model (a single Table) you need to create a file with the following naming : [name_of_the_model].ts

## Create a migration

In order to create a migration, you need to create a file with the following naming : [date]-[actions]-[name_of_the_model].ts

the actions available are :
- **create-[name_of_the_model]** : create the table.
- **add-[name_of_the_column]** : add a column to a table.

then, you need to compile the migration to perform the action directly to the database. <br>
`tsc ./database/migrations/20221031131306-create-Users.ts --outDir ./database/migrations/compiled`

finaly, on the command line, run <br>
`npm run database:migrate`