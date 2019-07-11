"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter your name"
        }
      },

      password: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter a password"
        },
        validate: {
          isNotShort: value => {
            if (value.length < 6) {
              throw new Error("Password should be at least 6 characters");
            }
          }
        }
      },

      email: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter your email address"
        },
        unique: {
          args: true,
          msg: "Email already exists"
        },
        validate: {
          isEmail: {
            args: true,
            msg: "Please enter a valid email address"
          }
        }
      }
    },
    {}
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
