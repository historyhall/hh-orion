import express, { Express } from "express";
import {config} from "dotenv";
import {createHandler} from "graphql-http";
import {buildSchema} from "graphql/utilities";

config();

const app: Express = express();
const port = process.env.PORT || 5001;

// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
const root = {
    hello() {
        return "Hello world!"
    },
}

app.all(
    "/graphql",
    createHandler({
        schema: schema,
        rootValue: root,
    })
);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

