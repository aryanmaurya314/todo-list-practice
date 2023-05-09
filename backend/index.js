import express from 'express';
import connection from './db.js';
import dotenv from 'dotenv';
import router from './src/route.js';
// configure dotenv file
dotenv.config();

const app = express();

app.use(express.json());

app.use(router);

// connect to database
connection.connect((err) => {
  if (err) {
    console.log(`Connection to database failed: ${err.message || err}`);
  } else {
    console.log('Connected to database successfullly.');
    // after successful connection of database, start the server
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server is running on: http://localhost:${process.env.PORT}`);
    });
  }
});
