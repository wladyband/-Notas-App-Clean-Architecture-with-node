# notas

A new Flutter project.

## Comandos necessários para o projeto

docker run --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres

npm run typeorm migration:create -n CreateProducts
npm run typeorm migration:run
