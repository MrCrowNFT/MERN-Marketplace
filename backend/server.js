//Entry pint for API
//Add "type": "module" to packege.json to use import
import express from "express";

const app = express();

app.get("/", (req, res)=>{
    res.send("Server is ready");
    res.end();
})

app.listen(5500, () => {
  console.log("Server started at http://localhost:5500/");
});
