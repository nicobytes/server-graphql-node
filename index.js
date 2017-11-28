const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const myGraphQLSchema = require('./schema');

require('./db/setup')


const app = new express();

const PORT = 4200;

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({
    schema: myGraphQLSchema
  })
);

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
);

app.listen(PORT, () => {
  console.log('OK');
});