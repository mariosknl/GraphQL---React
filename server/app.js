const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const schema = require('./schema/schema')
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

// allow cross-origin request
app.use(cors());

mongoose.connect('mongodb+srv://marios:test123@cluster0.3ns25.mongodb.net/<dbname>?retryWrites=true&w=majority');
mongoose.connection.once('open', () => {
  console.log('connected to db');
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log("now listening for requests on port 4000");
});

