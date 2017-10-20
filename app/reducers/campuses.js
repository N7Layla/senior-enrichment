import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

export function getCampuses (campuses) {
  return {
    type: GET_CAMPUSES,
    campuses
  }
}

export function addCampus (campus) {
  return {
    type: ADD_CAMPUS,
    campus
  }
}

export function updateCampus (campus) {
  return {
    type: UPDATE_CAMPUS,
    campus
  }
}

export function removeCampus (campusId) {
  return {
    type: REMOVE_CAMPUS,
    campusId
  }
}

export default function reducer (campuses = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses
    case ADD_CAMPUS:
      return [...campuses, action.campus]
    case UPDATE_CAMPUS:
      return campuses.map(campus => (
        action.campus.id === campus.id ? action.campus : campus
      ))
    case REMOVE_CAMPUS:
      return campuses.filter(campus => campus.id !== action.campusId)
    default:
      return campuses
  }
}

//thunks

export const fetchCampuses = () => dispatch => {
  axios.get('/api/campuses')
  .then(res => dispatch(getCampuses(res.data)))
  .catch(err => console.error('Unable to find campuses', err))
}


export const submitCampus = campus => dispatch => {
    axios.post('/api/campuses', campus)
         .then(res => {dispatch(addCampus(res.data))})
         .catch(err => console.error('Unable to add campus', err))
}

export const deleteCampus = campusId => dispatch => {
  axios.delete(`/api/campuses/${campusId}`, campusId)
        .then(() => dispatch(removeCampus(campusId)))
        .catch(err => console.error('Unable to remove student', err))
}

export const editCampus = (id, campus) => dispatch => {
  axios.put(`/api/campuses/${id}`, campus)
      .then(res => dispatch(updateCampus(res.data)))
      .catch(err => console.error('Unable to update', err))
}
