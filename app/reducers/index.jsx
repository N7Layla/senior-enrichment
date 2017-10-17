//import { combineReducers } from 'redux'

const initialState = {
  campuses: [],
  students: []
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
    case 'GET_STUDENTS':
      return Object.assign({}, state, { students: action.students })
    case 'ADD_CAMPUS':
      return [action.campus, ...state.campuses];
    default:
      return state
  }
};

export default reducer;
