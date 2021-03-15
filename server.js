var PORT = process.env.PORT || 5000;

const express = require("express");
const apiRoutes = require("./apiRoutes");
const htmlRoutes = require("./htmlRoutes");


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));


