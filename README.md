## Prerequisites

### Install dependencies

```
yarn install
```

### Create .env file (see .env.example)

### Run migrations

```
npx sequelize-cli db:migrate
```

## Run app

### Start app

```
yarn dev
```

## API

### Create a robot

```
curl -X POST -H 'Content-Type: application/json' -d '{
  "name": "Robotina", "model": "ddd", "manufacturedBy": "ddd", "numberOfArms": 6
}' http://localhost:8000/api/v1/robots -i
```

### Get a robot

```
curl http://localhost:8000/api/v1/robots/1 -i
```

## DB

### (optional) Start db with docker-compose

```
docker-compose up --build
```

### 1) Run migrations

```
npx sequelize-cli db:migrate
```

### 2) Rollback last migration

```
npx sequelize-cli db:migrate:undo
```

## Run tests

```
yarn test
```
