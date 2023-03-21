const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "rushi@123",
  host: "localhost",
  database: "pernstack",
});
module.exports = pool;
