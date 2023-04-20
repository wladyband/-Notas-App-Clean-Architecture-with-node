# notas

A new Flutter project.

## Comandos necessários para o projeto

npm add express cors express-async-errors

npm add -D @types/express @types/cors

npm add typeorm reflect-metadata pg

npm add -D tsconfig-path

docker run --name postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=docker -p 5433:5432 -d postgres

npm run typeorm migration:create -- -n CreateUsers
npm run typeorm migration:create -- -n CreateUserTokens
npm run typeorm migration:create -- -n CreateProducts
npm run typeorm migration:create -- -n CreateOrders
npm run typeorm migration:create -- -n AddUserIdToOrders
npm run typeorm migration:create -- -n CreateOrdersProducts
npm run typeorm migration:create -- -n AddOrdersIdToOrdersProducts
npm run typeorm migration:create -- -n AddProductIdToOrdersProducts


npm run typeorm migration:run


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
<li>docker image -a
</li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>


</ul>






docker images -a
docker image rmi 680aba37fd0f
docker image rmi 739b655ecf34
docker images -a
docker image rmi 680aba37fd0f
docker rm 739b655ecf34
docker images -a
docker ps -a
docker image rmi 680aba37fd0f
docker images -a
docker volume ls
docker volume rm 8003dd19b67d11922d5b1ad8b6394f2ddbf73e1b715b4776ad44c531048822fe
docker volume ls


