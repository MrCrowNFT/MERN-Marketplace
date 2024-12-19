//Entry pint for API
//Add "type": "module" to packege.json to use import
import express from "express";

const app = express();
app.listen(5500, () => {
  console.log("Server started at http://localhost:5500/");
});
