"use strict";

import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";

import routes from "./routes";

import { initConnection, pool } from "./db/connect";

const env = process.env.NODE_ENV || "development";

const app = new Koa()
  .use(cors())
  .use(bodyParser())
  .use(async (ctx, next) => {
    try {
      await next();
    } catch (err) {}
  })
  .use(routes());

app.init = async () => {
  console.log("init");
  await initConnection();
  // console.log("pool", pool);
};

export default app;
