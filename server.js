var PORT = process.env.PORT || 3001;

const express = require("express");
const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes");
const fs = require("fs");
const uuidv1 = require("uuidv1");

const app = express();
const saveFile = "./db/db.json";
let noteList = fs.existsSync(saveFile)
  ? JSON.parse(fs.readFileSync(saveFile))
  : [];


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

let noteList = fs.existsSync(saveFile)
  ? JSON.parse(fs.readFileSync(saveFile))
  : [];




  noteList.push(noteData);
  console.log(noteData);
  fs.writeFileSync(saveFile, JSON.stringify(noteList));
  res.end();


app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
});

// npm install 
// npm i express
// npm i node
// npm i uuidv1