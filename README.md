# notas

A new Flutter project.

## Comandos necessários para o projeto

npm add express cors express-async-errors

npm add -D @types/express @types/cors

npm add typeorm reflect-metadata pg

npm add -D tsconfig-path

docker run --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres

npm run typeorm migration:create -- -n CreateProducts
npm run typeorm migration:run

