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
  Student.create(req.body)
  .then(student => res.json(student))
  .catch(next)
})

//update student
router.put('/:studentId', (req, res, next) => {
  Student.findById(req.params.studentId)
  .then(student => student.update(req.body))
  .then(student => res.json(student))
  .catch(next)
})

// remove student
router.delete('/:studentId', (req, res, next) => {
  Student.destroy({
    where: {id: req.params.studentId}
  }).then(() => res.status(204).end())
  .catch(next)
})


module.exports = router;
