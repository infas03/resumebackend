const Information = require("../models/informationModel.js");

exports.addDetails = (req, res) => {
  const information = new Information({
    head: req.body.head,
    summery: req.body.summery,
    education: req.body.education,
    experience: req.body.experience,
    skills: req.body.skills,
    competencies: req.body.competencies,
    hobbies: req.body.hobbies,
    email: req.body.email
  });
  information
    .save()
    .then(result => {
      console.log(result);
      res.status(201).json({
        message: "Successfully added"
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

exports.viewByEmail = (req, res) =>{
  Information.find({email: req.params.email})
  .then((info) => res.json(info))
  .catch((err) => res.status(404).json({ error: "No email found" }));
};

exports.updateDetails = (req, res) => {
 Information.findOneAndUpdate({email: req.params.email}, req.body)
  .then((ele) => res.json({msg:   `${ele} updated successfully`}))
  .catch((err) => res.status(400).json({error: `unable to update: ${err}`}))
}