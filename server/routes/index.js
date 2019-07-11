const Users = require("../controllers/user");

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the BookStore API!"
    })
  );

  app.get("/api/users", Users.list); // API route untuk menampilkan semua users

  app.post("/api/users", Users.signUp); // API route for user to signup
};
