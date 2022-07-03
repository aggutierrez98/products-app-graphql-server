import { dbConnection } from "../database/config";
import express, { Application } from "express";
import compression from "compression";
import cors from "cors";
import { createServer, Server } from "http";
import { ApolloServer, ExpressContext } from "apollo-server-express";
import expressPlayGround from "graphql-playground-middleware-express";
// @ts-ignore
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";
import { v2 as cloudinary } from "cloudinary";
import schema from "../schema";
import { contextMiddleware } from "../middlewares/contextMiddleware";
// import {
//   applyMiddleware,
//   IMiddleware,
//   IMiddlewareGenerator,
// } from "graphql-middleware";

class ServerModel {
  private app: Application;
  private httpServer: Server;
  private port: string;
  private server!: ApolloServer<ExpressContext>;
  // private graphQLMiddlewares:
  //   | IMiddlewareGenerator<any, any, any>[]
  //   | IMiddleware[];

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "5200";
    this.httpServer = createServer(this.app);
    // this.graphQLMiddlewares = [];

    this.middlewares();

    this.connectGraphQL();

    this.connectDB();

    this.cloudinaryConfig();

    this.app.get(
      "/",
      expressPlayGround({
        endpoint: "/graphql",
      })
    );
  }

  connectGraphQL() {
    // const schemaWithMiddleware: ReturnType<typeof applyMiddleware> =
    //   applyMiddleware(schema, ...this.graphQLMiddlewares);

    this.server = new ApolloServer({
      // schema: schemaWithMiddleware,
      schema,
      introspection: true,
      // csrfPrevention: true,
      context: contextMiddleware,
    });

    // // CORS configuration
    // const corsOptions = {
    //   // origin: "http://localhost:8081",
    //   // origin: "http://192.168.0.100:8081",
    //   origin: "http://181.89.152.171",
    //   credentials: true,
    // };

    this.server.start().then(() => {
      this.server.applyMiddleware({
        app: this.app,
        // cors: corsOptions
      });
    });
  }

  async connectDB() {
    await dbConnection();
  }

  cloudinaryConfig() {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  middlewares() {
    this.app.use(graphqlUploadExpress({ maxFileSize: 2 * 1000 * 1000 }));
    this.app.use(cors());
    this.app.use(compression());

    // this.graphQLMiddlewares = [
    //   // permissions
    // ];
  }

  listen() {
    this.httpServer.listen(
      {
        port: this.port,
      },
      () => {
        console.log(`Server running in: http://localhost:${this.port}`);
      }
    );
  }
}

export default ServerModel;
