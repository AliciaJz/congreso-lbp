const User = require ('../models/User');

exports.deleteUser = (req, res, next) => {
  User.findByIdAndRemove(req.params.id)
  .then(item => res.status(200).json(item))
  .catch(e => res.status(500).send(e));
}

exports.patchUser = (req, res, next) => {
  User.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item => res.status(200).json(item))
  .catch(e => res.status(500).send(e));
}

exports.getUsers = (req, res, next) => {
    User.find()
    .then(items => res.status(200).json(items))
    .catch(e => res.status(500).send(e));
  }

  exports.postUser = (req, res, next) =>{
    const newUser = new User({
      title: req.body.title,
      description: req.body.description
        });

    newUser.save()
    .then(item => res.status(201).json(item))
    .catch(e => res.status(500).send(e))
  }