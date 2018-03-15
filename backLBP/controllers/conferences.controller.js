const Conference = require ('../models/Conference');

exports.getConferences = (req, res, next) => {
    Conference.find()
    .then(conferences => res.status(200).json(conferences))
    .catch(e => res.status(500).send(e));
  }

  exports.postConferences = (req, res, next) =>{
    const newConference = new Conference({
      number: req.body.number,
      description: req.body.description
        });

    newConference.save()
    .then(user => res.status(201).json(user))
    .catch(e => res.status(500).send(e))
  }