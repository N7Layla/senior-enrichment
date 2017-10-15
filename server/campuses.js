const router = require('express').Router();
const { Campus, Student } = require('../db/models');

// all campuses
router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(next)
})

// specific campus
router.get('/:campusId', (req, res, next) => {
  Campus.findById(req.params.campusId)
  .then(campus => res.json(campus))
  .catch(next)
})

// students by campus
router.get('/:campusId/students', (req, res, next) => {
  Student.findAll({
    where: {id: req.params.campusId}
  }).then(students => res.json(students))
  .catch(next)
})

// add campus
router.post('/', (req, res, next) => {
  Campus.create({
    where: {name: req.body.name,
            description: req.body.description,
            image: req.body.image
    }
  }).then(campus => res.json(campus))
  .catch(next)
})

// remove campus
router.delete('/:campusId', (req, res, next) => {
  Campus.delete({
    where: {id: req.params.campusId}
  }).then(() => res.status(204).end())
  .catch(next)
})

module.exports = router;
