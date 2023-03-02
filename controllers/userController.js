const bcrypt = require("bcrypt");

const User = require("../models/userModel.js");

exports.signup = (req, res) => {
  User.find({ email: req.body.email})
    .exec()
    .then(user => {
      if(user.length >= 1){
        return res.status(409).json({
          message: "Email exists"
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err
            });
          } else {
            const user = new User({
               email: req.body.email,
               password: hash
            });
            user
              .save()
              .then(result => {
                console.log(result);
                res.status(201).json({
                  email: result.email, result: true
                });
              })
              .catch(err => {
                console.log(err);
                res.status(500).json({
                  error: err
                });
              });
          }
        });
      }
    });
}

exports.login = (req, res) => {
  User.find({ email: req.body.email})
    .exec()
    .then(user => {
      if(user.length < 1){
        return res.status(401).json({
          message: "User does not exist"
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if(err){
          return res.status(401).json({
            message: "server error"
          });
        }
        if(result){
          return res.status(200).json({
            email: user[0].email, result: true
          });
        } else {
          res.status(401).json({
            message: "Check username and password"
          });
        }
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};