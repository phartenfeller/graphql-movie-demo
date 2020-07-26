# GraphQL Movie API Demo

## Prerequisites

- [Node.js](https://nodejs.org/en/)

## Run API

1. Clone Repo

2. `yarn install` or `npm install`

3. `yarn start` or `npm run start`

4. Open http://localhost:4000/graphql to run queries

## Branches

- [demo-empty](https://github.com/phartenfeller/graphql-movie-demo/tree/demo-empty) : empty starter template
- [demo-1](https://github.com/phartenfeller/graphql-movie-demo/tree/demo-1) : hello world GraphQL setup
- [demo-2](https://github.com/phartenfeller/graphql-movie-demo/tree/demo-2) : query to get all movies (allMovies)
- [demo-3](https://github.com/phartenfeller/graphql-movie-demo/tree/demo-3) : query with parameter to limit amount of returned movies (amountOfMovies)
- [demo-4](https://github.com/phartenfeller/graphql-movie-demo/tree/demo-4) / master : cast type with actors and movies in which they appear to show relations and field resolvers

## Example Queries

Hello World:

```gql
{
  hello
}
```

All Movies:

```gql
{
  allMovies {
    id
    title
    year
  }
}
```

Limit amount of returned Movies:

```gql
{
  amountOfMovies(amount: 10) {
    id
    title
    year
  }
}
```

Relation between Movies and Cast:

```gql
{
  amountOfMovies(amount: 10) {
    id
    title
    year
    cast {
      name
      role
      movies {
        title
      }
    }
  }
}
```
