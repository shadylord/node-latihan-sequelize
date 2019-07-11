const model = require("../models");

const { User } = model;

class Users {
  static signUp(req, res) {
    const { name, password, email } = req.body;
    return User.create({
      name,
      password,
      email
    }).then(userData =>
      res.status(201).send({
        success: true,
        message: "User successfully created",
        userData
      })
    );
  }

  static list(req, res) {
    return User.findAll()
      .then(users => res.status(201).send(users))
      .catch(error => res.status(400).send({ msg: "Failed!" }));
  }
}

module.exports = Users;
