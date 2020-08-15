# demo-nestjs

![GitHub](https://img.shields.io/github/license/romajs/demo-nestjs)
![node](https://img.shields.io/badge/node-v12-brightgreen.svg)
![nestJS](https://img.shields.io/badge/nestJS-7.0-orange.svg)
![Requires.io](https://img.shields.io/requires/github/romajs/demo-nestjs)

## Description

**NestJS** demo app server featuring:

- Application modularity
- Request logger with `pino`
- MySQL database
- JWT authentication
- Role based guard authorization

## Requirements

- Docker and Docker Compose
- Node v12+
- Npm v6.12+

## Installation

```bash
$ docker-compose up -d
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Documentation

For detailed information please see the project documentation.

- [NestJS](./docs/nestjs.md)

---

romajs - 2020
