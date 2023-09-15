import pg from "pg";

const { Pool } = pg;

const connection = new Pool({
  host: "localhost",
  port: 5432,
  user: "postgres", 
  password: "p0stgr3s", 
  database: "pratica-randon-person"
})

export { connection };