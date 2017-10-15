import { combineReducers } from 'redux'

const initialState = {
  campuses: [],
  students: [],
  newCampus: '',
  newStudent: ''
}

// const rootReducer = function(state = initialState, action) {
//   switch (action.type) {
//     default: return state
//   }
// };

const reducer = function(state = initialState, action) {
  switch (action.type) {
    case 'GET_CAMPUSES':
      return Object.assign({}, state, { campuses: action.campuses })
    default:
      return state
  }
};

export default reducer;
