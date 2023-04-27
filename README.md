# notas

A new Flutter project.

## Comandos necessários para o projeto

npm add express cors express-async-errors

npm add -D @types/express @types/cors

npm add typeorm reflect-metadata pg

npm add -D tsconfig-path

docker run --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres

## Comandos necessários para TypeORM
<ul>
  <li>npm run typeorm migration:create -- -n CreateUsers
</li>
  <li>npm run typeorm migration:create -- -n CreateUserTokens
</li>
  <li>npm run typeorm migration:create -- -n CreateProducts
</li>
  <li>npm run typeorm migration:create -- -n CreateOrders
</li>
  <li>npm run typeorm migration:create -- -n AddUserIdToOrders
</li>
  <li>npm run typeorm migration:create -- -n CreateOrdersProducts
</li>

<li>npm run typeorm migration:create -- -n AddOrdersIdToOrdersProduct
</li>
  <li>npm run typeorm migration:create -- -n AddProductIdToOrdersProducts
</li>
  <li>npm run typeorm migration:run
</li>
</ul>


## Comandos necessários para docker


<h1>Exemplos:</h1>
<ul>
  <li>docker stop 739b655ecf34
</li>
  <li>docker start 739b655ecf34
</li>
  <li>npm run dev
</li>
  <li>docker ps
</li>
<li>docker ps -l
</li>
<li>docker images -a
</li>
<li>docker image rmi -f 680aba37fd0f
</li>
</li>
<li>docker ps -a
<li>docker rm 739b655ecf34
</li>
<li>docker images -a
</li>
<li>docker volume ls
</li>
<li>docker volume rm 8003dd19b67d11922d5b1ad8b6394f2ddbf73e1b715b4776ad44c531048822fe
</li>
<li>docker volume ls
</li>
</ul>





















