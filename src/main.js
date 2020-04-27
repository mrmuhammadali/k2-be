// @flow
import App from 'fusion-core';
import cors from '@koa/cors';
import {config as envConfig} from 'dotenv';
import HttpRouter, {
  HttpRouterToken,
  HttpHandlersToken,
} from 'fusion-plugin-http-router';

import handlers from './handlers';

export default () => {
  const app = new App('K2', el => el);
  if (__DEV__) {
    envConfig();
  }
  if (__NODE__) {
    app.middleware(cors());
    app.register(HttpRouterToken, HttpRouter);
    app.register(HttpHandlersToken, handlers);
  }
  return app;
};
