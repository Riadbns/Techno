const sqlite3=require('sqlite3').verbose();
const db = new sqlite3.Database(process.env.DB_PATH + '/' + process.env.DB_NAME, 
(err) => { if (err) { console.error(err.message); }
 console.log('Connected to the SQLite database.'); });

 const sql = `CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE
  );`;
  
   
  
  db.run(sql, (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Table created successfully');
  });
  db.close((err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Close the database connection.');
  });