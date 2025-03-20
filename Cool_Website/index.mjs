import express from 'express'

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("public"));

app.get("/", (req, res) =>{
      res.render("landing_page");
});

app.listen(5000, () =>{ console.log("Server started")});