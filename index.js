const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { schema, root } = require('./src/graphql/schema');
