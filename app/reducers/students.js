import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const ADD_STUDENT = 'ADD_STUDENT';

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

export default function reducer (students = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students
    case ADD_STUDENT:
      return [...students, action.student]
    default:
      return students
  }
}

export function fetchStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/students')
    .then(res => res.data)
    .then(students => {
      const action = getStudents(students);
      dispatch(action);
    })
  }
}

export const submitStudent = student => dispatch => {
    axios.post('/api/students', student)
         .then(res => {
          dispatch(addStudent(res.data))
         })
         .catch(err => console.error('Unable to add student', err))
}

