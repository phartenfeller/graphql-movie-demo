const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./src/graphql/schema');

const app = express();

const port = 4000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/graphql`);
});
