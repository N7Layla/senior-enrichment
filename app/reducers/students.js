import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';
const UPDATE_STUDENT = 'UPDATE_STUDENT';

export function getStudents (students) {
  return {
    type: GET_STUDENTS,
    students
  }
}

export function addStudent (student) {
  return {
    type: ADD_STUDENT,
    student
  }
}

export function removeStudent (studentId) {
  return {
    type: REMOVE_STUDENT,
    studentId
  }
}

export function updateStudent (student) {
  return {
    type: UPDATE_STUDENT,
    student
  }
}

export default function reducer (students = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    case ADD_STUDENT:
      return [...students, action.student]
    case REMOVE_STUDENT:
      return students.filter(student => student.id !== action.studentId)
    case UPDATE_STUDENT:
      return students.map(student => (
        action.student.id === student.id ? action.student : student
      ))
    default:
      return students
  }
}

//thunks

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
  .then(res => dispatch(getStudents(res.data)))
  .catch(err => console.error('Unable to get students', err))
}

export const submitStudent = student => dispatch => {
    axios.post('/api/students', student)
         .then(res => {dispatch(addStudent(res.data))})
         .catch(err => console.error('Unable to add student', err))
}


export const deleteStudent = studentId => dispatch => {
  axios.delete(`/api/students/${studentId}`, studentId)
        .then(() => dispatch(removeStudent(studentId)))
        .catch(err => console.error('Unable to remove student', err))
}

export const editStudent = (id, student) => dispatch => {
  axios.put(`/api/students/${id}`, student)
      .then(res => dispatch(updateStudent(res.data)))
      .catch(err => console.error('Unable to update', err))
}
