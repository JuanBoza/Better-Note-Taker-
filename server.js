const fs = require("fs");
const express = require("express");
const uuidv1 = require("uuidv1");

const app = express();

let PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const saveFile = "./db/db.json";

//==============Data=====================
let noteList = fs.existsSync(saveFile)
  ? JSON.parse(fs.readFileSync(saveFile))
  : [];
//=======================================


app.get("/api/notes", (req, res) => {
  res.send(noteList);
});

app.delete("/api/notes/:id", (req, res) => {
  let deleteNote = req.params.id;
  noteList = noteList.filter((note) => note.id != deleteNote);
  fs.writeFileSync(saveFile, JSON.stringify(noteList));
  res.end("Note has been deleted");
});

app.post("/api/notes", function (req, res) {
  let noteData = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv1(),
  };
  noteList.push(noteData);
  console.log(noteData);
  fs.writeFileSync(saveFile, JSON.stringify(noteList));
  res.end();
});

app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
});







/*var PORT = process.env.PORT || 3001;

const express = require("express");
const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes");
const fs = require("fs");


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






app.listen(PORT, () => {
  console.log(`Listening ${PORT}`);
});

// npm install 
// npm i express
// npm i node
// npm i uuidv1

*/ 