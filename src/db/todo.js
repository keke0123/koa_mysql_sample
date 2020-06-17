import { single } from "./connect";

const createTable = async () => {
  let query = `
    create table if not exists todos(
      id int primary key auto_increment,
      title varchar(255) not null,
      created_at timestamp default current_timestamp
    )
  `;
  return await single(query);
};

const insertData = async (data) => {
  let query = `
      insert into todos
      set ?;
    `;
  return await single(query, data);
};

const insertData2 = async (title) => {
  let query = `
      insert into todos
      set title = ?;
    `;
  return await single(query, title);
};

const selectData = async () => {
  let query = `
    select * from todo.todos
  `;
  return await single(query);
};

export { createTable, insertData, insertData2, selectData };
