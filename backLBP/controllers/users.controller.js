const User = require ('../models/User');

exports.getUsers = (req, res, next) => {
    User.find()
    .then(users => res.status(200).json(users))
    .catch(e => res.status(500).send(e));
  }

  exports.postUsers = (req, res, next) =>{
    const newUser = new User({
      username: req.body.username,
      email: req.body.email
        });

    newUser.save()
    .then(user => res.status(201).json(user))
    .catch(e => res.status(500).send(e))
  }