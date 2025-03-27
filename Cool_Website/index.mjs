import express from 'express'
import sqlite3 from 'sqlite3';
sqlite3.verbose();

const app = express();

const database1 = new sqlite3.Database('FILENAME_HERE.db', (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log('Connected to the database.');
});

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", (req, res) =>{
      res.render("landing_page");
});

app.get("/staff", (req, res) =>{
	database1.all("SELECT * FROM staff", [], (error, results)=>{
	res.render("staff", {results: results});
});
});

app.listen(5000, () =>{ console.log("Server started")});