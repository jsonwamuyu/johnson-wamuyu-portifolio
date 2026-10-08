import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { books, authors } from "./_db";

// need to create an instance of the server from ApolloServer and pass typeDefs and resolvers

const PORT = 2005;

const typeDefs = `#graphql
type Book{
    id:ID!
    title:String!
    author:Author!
  }
  type Author{
    id:ID!
    fullname:String!
    books:[String!]!
  }
  type Query{
    books:[Book]
    book(id:ID!):Book
    authors: [Author]
    author(id:ID!):Author
  }
  type Mutation{
    addBook(title:String!, author:String!):Book
    addAuthor(fullname:String!):Author
  }
`;

const resolvers = {
  Query: {
    books() {
      return books;
    },
    book(_, args) {
      return this.books.find((book) => book.id === args.id);
    },
    authors() {
      return authors;
    },
    authors(_, args) {
      return this.authors.find((author) => author.id === args.id);
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, { listen: { port: PORT } });
console.log(`Server running at ${url}`);
