const { read, write } = require("../utils/FS");

const GET_USERS = (req, res) => {
  try {
    const data = read("users.json");

    res.render("index", { users: data });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};

const POST_USERS = (req, res) => {
  try {
    const { name } = req.body;

    if (name) {
      const users = read("users.json");
      users.push({ id: users.length + 1, name });
      write("users.json", users);
    }

    res.redirect("/users");
  } catch (err) {
    console.log(err);
    res.sendStatus(401);
  }
};

const DELETE_USERS = (req, res) => {
  try {
    const { id } = req.params;
    const users = read("users.json");

    const foundUser = users.findIndex((e) => e.id == id);

    users.splice(foundUser, 1);

    write("users.json", users);
    res.json("ok");
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
};
module.exports = {
  GET_USERS,
  POST_USERS,
  DELETE_USERS,
};
