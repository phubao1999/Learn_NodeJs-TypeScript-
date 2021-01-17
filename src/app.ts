import corsConfig from "./config/cors";
import BuildRoot from "./graphql/BuildRoot";
import BuildSchemaStringGrapql from "./graphql/BuildSchema";
import express from 'express';
import cors from 'cors';
const graphqlHTTP = require("express-graphql").graphqlHTTP;
const buildSchema = require('graphql');
const port = process.env.PORT || 3000;

require("dotenv/config");

const app = express();

// Build GraphQL
const schema = buildSchema.buildSchema(BuildSchemaStringGrapql.buildSchemaString);
const root = BuildRoot.buildRoot;

app.use(cors(corsConfig.config));
app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
);

app.listen(port, () => console.log(`Now browse to localhost:${port}/graphql`));