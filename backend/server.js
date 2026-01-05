import { ApolloServer } from "@apollo/server";
import {
  startStandaloneServer,
  StartStandaloneServer,
} from "@apollo/server/standalone";

import { typeDefs } from ".";

const server = new ApolloServer({
    //typeDefs
    // Resovers
    typeDefs,
});

const { url } = await startStandaloneServer(server, {listen:{port:4000}});

console.log("Server started at ", url);
