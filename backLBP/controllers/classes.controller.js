const Class = require ('../models/Class');

exports.deleteClass = (req, res, next) => {
  Class.findByIdAndRemove(req.params.id)
  .then(item => res.status(200).json(item))
  .catch(e => res.status(500).send(e));
}

exports.patchClass = (req, res, next) => {
  Class.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item => res.status(200).json(item))
  .catch(e => res.status(500).send(e));
}

exports.getClasses = (req, res, next) => {
    Class.find()
    .then(items => res.status(200).json(items))
    .catch(e => res.status(500).send(e));
  }

  exports.postClass = (req, res, next) =>{
    const newClass = new Class({
      title: req.body.title,
      description: req.body.description
        });

    newClass.save()
    .then(item => res.status(201).json(item))
    .catch(e => res.status(500).send(e))
  }