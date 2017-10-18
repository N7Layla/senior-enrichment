import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS';

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

export default function reducer (campuses = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses
    case ADD_CAMPUS:
      return [action.campus, ...campuses]
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
