const Pet = require ('../models/pet.model');

module.exports = {

  createPet: (req, res) => {
    Pet.create(req.body)
      .then((newPet) => res.json(newPet))
      .catch((err) => res.status(400).json(err));
  },

  getAllPets: (req, res) => {
    Pet.find({}).sort({ type: 1, name: 1 })
      .then((allPets) => res.json(allPets))
      .catch((err) => res.status(400).json(err));
  },

  getOnePet: (req, res) => {
    Pet.findOne({ _id: req.params.id })
    .then((onePet) => res.json(onePet))
    .catch((err) => res.status(400).json(err));
  },

  editPet: (req, res) => {
    Pet.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
      context: 'query'
    })
    .then((updatedPet) => res.json(updatedPet))
    .catch((err) => res.status(400).json(err));
  },

  deletePet: (req, res) => {
    Pet.deleteOne({ _id: req.params.id })
    .then((deletedId) => res.json(deletedId))
    .catch((err) => res.status(400).json(err));
  }

};