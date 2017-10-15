const router = require('express').Router();
const { Student } = require('../db/models');

// all students
router.get('/', (req, res, next) => {
  Student.findAll()
  .then(students => res.json(students))
  .catch(next)
})

// specific student
router.get('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
  .then(student => res.json(student))
  .catch(next)
})

// add student
router.post('/', (req, res, next) => {
  Student.create({
    where: {name: req.body.name,
            email: req.body.email,
            campusId: req.body.campusId}
  }).then(student => res.json(student))
  .catch(next)
})

module.exports = router;
