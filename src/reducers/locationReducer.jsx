/*
    Title: locationReducer.jsx
    Version: 1.5.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
export default function reducer(state={
  city: null,
  state: null,
  location: 'Fetching...',
  error: null
}, action){
  switch (action.type) {
    case "FETCH_LOCATION":{
      return {...state,
        fetching: true
      }
    }
    case "FETCH_LOCATION_FULFILLED":{
      if(action.payload.city){
        return {
            ...state,
            city: action.payload.city,
            state: action.payload.stateCode,
            location: action.payload.city + ', ' + action.payload.stateCode
        }
      }else{
        return {
            ...state,
            location: 'Unknown'
        }
      }
    }
    case "FETCH_LOCATION_REJECTED":{
      return {
          ...state,
          location: 'Unknown',
          error: action.payload
      }
    }
    default:
      return {
        ...state
      }
  }
}
