const Class = require ('../models/Class');

exports.getClass = (req, res, next) => {
    Class.find()
    .then(classes => res.status(200).json(classes))
    .catch(e => res.status(500).send(e));
  }

  exports.postClasses = (req, res, next) =>{
    const newClass = new Class({
      title: req.body.title,
      description: req.body.description
        });

    newClass.save()
    .then(user => res.status(201).json(user))
    .catch(e => res.status(500).send(e))
  }