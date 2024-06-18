import express, { Express } from "express";
import {config} from "dotenv";
import {graphqlHTTP} from 'express-graphql'
import {GraphQLObjectType, GraphQLSchema, GraphQLString} from "graphql/type";
import cors from 'cors';

config();

const query = new GraphQLObjectType({
    name: 'getApiVersion',
    fields: () => ({
        apiVersion: {
            type: GraphQLString,
            resolve: () => {
                return process.env.API_VERSION || '0.0.1';
            }
        }
    })
})

const schema = new GraphQLSchema({query})

const app: Express = express();
const port = process.env.PORT || 5001;
app.use(cors({credentials: true, origin: 'http://localhost:5000'}));

app.use(
    "/api",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    }));

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});

