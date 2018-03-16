const Conference = require ('../models/Conference');

exports.deleteConference = (req, res, next) => {
  Conference.findByIdAndRemove(req.params.id)
  .then(item => res.status(200).json(item))
  .catch(e => res.status(500).send(e));
}

exports.patchConference = (req, res, next) => {
  Conference.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(item => res.status(200).json(item))
  .catch(e => res.status(500).send(e));
}

exports.getConferences = (req, res, next) => {
  Conference.find()
    .then(items => res.status(200).json(items))
    .catch(e => res.status(500).send(e));
  }

  exports.postConference = (req, res, next) =>{
    const newConference = new Conference({
      edition: req.body.edition,
      description: req.body.description
        });

    newConference.save()
    .then(item => res.status(201).json(item))
    .catch(e => res.status(500).send(e))
  }