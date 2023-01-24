import { dbConnection } from "../database/config";
import express, { Application } from "express";
import compression from "compression";
import cors from "cors";
import { createServer, Server } from "http";
import { ApolloServer, ExpressContext } from "apollo-server-express";
import expressPlayGround from "graphql-playground-middleware-express";
import { v2 as cloudinary } from "cloudinary";
import schema from "../schema";
import { contextMiddleware } from "../middlewares/contextMiddleware";
// @ts-ignore
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";

class ServerModel {
  private app: Application;
  private httpServer: Server;
  private port: string;
  private server!: ApolloServer<ExpressContext>;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || "5200";
    this.httpServer = createServer(this.app);

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
    this.server = new ApolloServer({
      schema,
      introspection: true,
      csrfPrevention: true,
      context: contextMiddleware,
    });

    // CORS configuration
    const corsOptions = {
      credentials: true,
    };

    this.server.start().then(() => {
      this.server.applyMiddleware({
        app: this.app,
        cors: corsOptions,
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
