import '@babel/polyfill/noConflict'
import { GraphQLServer, PubSub } from 'graphql-yoga';
import db from './db';
import {resolvers,fragmentReplacements} from './resolvers';
import prisma from './prisma';

const pubsub = new PubSub()

const server = new GraphQLServer({
  //Type definitions (schema)
  //INPUT TYPE JUST SCALARS
  typeDefs: './src/schema.graphql',
  resolvers,
  context(request){
    return {
      db,
      pubsub,
      prisma,
      request
    }
  },
  fragmentReplacements
});

server.start({port:process.env.PORT || 4000}, ()=> {
  console.log('The server is up');
});


//Each time we modify prisma/datamodel.graphql we need to deploy it and then run the get-schema command and dont forget to update the schema.graphql if necessary
//when using env run prisma deploy -e ../config/development.env