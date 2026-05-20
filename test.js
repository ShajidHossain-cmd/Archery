const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "", // XAMPP default is empty password
  database: "test4",
});
conn.connect((err) => {
  if (err) {
    console.error("Connection failed:", err.message);
  } else {
    console.log("Connected!");
    conn.query("SHOW TABLES", (err, results) => {
      console.log("Tables:", results);
      conn.end();
    });
  }
});
