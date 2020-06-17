import mysql from "mysql";
import Bluebird, { using } from "bluebird";
//
import config from "../configs";
//
Bluebird.promisifyAll(mysql);
Bluebird.promisifyAll(require("mysql/lib/Connection").prototype);
Bluebird.promisifyAll(require("mysql/lib/Pool").prototype);

let pool = {};

const initConnection = async () => {
  pool = await mysql.createPool({
    connectionLimit: config.connectionLimit,
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
  });
};

let poolConnection = async () => {
  return pool.getConnectionAsync().disposer(function (connection) {
    console.log("connection release");
    return connection.release();
  });
};

const single = (sql, values) => {
  return using(poolConnection(), (connection) => {
    return connection.queryAsync({
      sql,
      values,
    });
  });
};

export { initConnection, single };

// export default pool;
