require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("client/build"));

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/bookshelf_builder_db",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});
