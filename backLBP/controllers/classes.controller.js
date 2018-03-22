const Class = require("../models/Class");
const Conference = require("../models/Conference");

exports.postClass = (req, res, next) => {
  console.log("entrando");
  const newClass = new Class({
    title: req.body.title,
    description: req.body.description
  });

  newClass
    .save()
    .then(item => {
      Conference.findByIdAndUpdate(req.params.idConference, {
        $push: { classes: item._id }
      }).then(() => res.status(201).json(item));
    })
    .catch(e => res.status(500).send(e));
};
exports.deleteClass = (req, res, next) => {
  Class.findByIdAndRemove(req.params.id)
    .then(item => res.status(200).json(item))
    .catch(e => res.status(500).send(e));
};

exports.patchClass = (req, res, next) => {
  Class.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(item => res.status(200).json(item))
    .catch(e => res.status(500).send(e));
};

exports.getClasses = (req, res, next) => {
  Class.find()
    .then(items => res.status(200).json(items))
    .catch(e => res.status(500).send(e));
};
