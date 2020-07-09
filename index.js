const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema, root } = require('./src/graphql/schema');

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true
  })
);

app.listen(4000);

console.log(`Server listening on http://localhost:4000/graphql`);
