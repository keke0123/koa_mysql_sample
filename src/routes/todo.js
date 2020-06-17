import Router from "koa-router";

import { single } from "../db/connect";
import { createTable, insertData, insertData2, selectData } from "../db/todo";

const api = new Router({ prefix: "/todo" });

api.use(async (ctx, next) => {
  // console.log("middleware");
  await next();
});

api.get("/create", async (ctx) => {
  await createTable();
  ctx.body = {
    message: "create table",
  };
});

api.post("/insert", async (ctx) => {
  // await insertData()
  // console.log("ctx.request.body", ctx.request.body);
  const title = ctx.request.body.title;
  await insertData({ title });
  ctx.body = {
    message: "inserted",
  };
});

api.get("/select", async (ctx) => {
  const result = await selectData();
  console.log("result", result);
  ctx.body = result;
});

// api.get("/connection", async (ctx) => {
//   let con = await connection();
//   // console.log("con", con);
//   try {
//     con.release();
//   } catch (err) {
//     console.log("err", err);
//   }
//   ctx.body = {
//     message: "connection ok",
//   };
// });

// api.get("/init", async (ctx) => {
//   await createTable();

//   ctx.body = {
//     message: "init",
//   };
// });

// api.get("/insert1", async (ctx) => {
//   //
//   await insertData({ title: "test1" });
//   ctx.body = {
//     message: "success insert",
//   };
// });

// api.get("/insert2", async (ctx) => {
//   //
//   await insertData2("test2");
//   ctx.body = {
//     message: "success insert",
//   };
// });

export default api;
