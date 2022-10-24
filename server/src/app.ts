import cors from 'cors';
import express from 'express';
import { NODE_ENV, PORT } from './config';
import { Routes } from './interfaces/routes.interface';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import errorMiddleware from './middlewares/error.middleware';
import { connect } from 'mongoose';

class App {
  public app: express.Application;
  public env: string;
  public port: string | number;

  constructor(routes: Routes[]) {
    this.app = express();
    this.env = NODE_ENV || 'development';
    this.port = PORT || 8080;

    this.initializeDatabaseConnection();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
    this.initializeSwagger();
    this.initializeErrorHandlingMiddleware();
  }

  public listen() {
    this.app.listen(this.port, () => {
      //TODO: Create custom logger
      console.log(`=================================`);
      console.log(`======= ENV: ${this.env} =======`);
      console.log(`App listening on the port ${this.port}`);
      console.log(`=================================`);
    });
  }

  public getServer() {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeErrorHandlingMiddleware() {
    this.app.use(errorMiddleware);
  }

  private initializeDatabaseConnection() {
    connect(process.env.DATABASE_URL, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Connected to database');
      }
    });
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach((route) => {
      this.app.use('/api/v1/', route.router);
    });
  }

  private initializeSwagger() {
    const options = {
      swaggerDefinition: {
        info: {
          title: 'REST API',
          version: '1.0.0',
          description: 'CRUD docs',
        },
      },
      apis: ['swagger.yaml'],
    };

    const specs = swaggerJSDoc(options);
    this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  }
}

export default App;
