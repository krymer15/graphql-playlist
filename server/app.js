const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allow cross origin requests
app.use(cors());

const MongoURI = 'mongodb+srv://test:test@graphql-playlist-asqoq.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(MongoURI, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Connected to MongoDB...'));

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Listening on port 4000...')
});