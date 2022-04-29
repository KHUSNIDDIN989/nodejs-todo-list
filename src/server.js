const express = require("express");
const { sendStatus } = require("express/lib/response");
const path = require("path");
const app = express();
const PORT = 9000;
const { GET_USERS, POST_USERS, DELETE_USERS } = require("./controller/users");
const ejs = require("ejs");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views/");

app.use("/assets", express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.get("/users", GET_USERS);
app.post("/newUser", POST_USERS);
app.delete("/delete/:id", DELETE_USERS);

app.use("/*", (_, res) => res.sendStatus(404));
app.listen(PORT, console.log(PORT));
