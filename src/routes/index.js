import combineRouters from "koa-combine-routers";

import routeRoot from "./root";
import routeTodo from "./todo";

const router = combineRouters([
  //
  routeRoot,
  routeTodo,
]);

export default router;
