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

const port = 4000;

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/graphql`);
});
