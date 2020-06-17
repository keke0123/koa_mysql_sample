import Router from "koa-router";

const api = new Router();

api.get("/test", async (ctx) => {
  ctx.body = {
    message: "test success",
  };
});

export default api;
