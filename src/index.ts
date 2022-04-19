import App from './app';
import Controllers from './controllers';
import config from './config/env.config';

const controllers = new Controllers();

const app = new App(
  [
    controllers.shortUrlsController,
  ],
  config.PORT,
);
 
app.start();