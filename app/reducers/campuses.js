import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';
//const DELETE_CAMPUS = 'DELETE_CAMPUS';

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

// export function deleteCampus (campusId) {
//   return {
//     type: DELETE_CAMPUS,
//     campusId
//   }
// }

export default function reducer (campuses = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses
    case ADD_CAMPUS:
      return [...campuses, action.campus]
    // case DELETE_CAMPUS:
    //   return campuses.filter(campus => campus.id !== action.campusId)
    default:
      return campuses
  }
}

//thunks
export function fetchCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action);
      });
  }
}


export const submitCampus = campus => dispatch => {
    axios.post('/api/campuses', campus)
         .then(res => {
          dispatch(addCampus(res.data))
         })
         .catch(err => console.error('Unable to add campus', err))
}

// export const removeCampus = id => dispatch => {
//   axios.delete(`/api/campuses/${id}`)
//   .then(() => dispatch(deleteCampus(id);)
//   .catch(err => console.error('Unable to remove campus', err))
// }
