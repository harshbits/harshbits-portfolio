/*
    Title: locationReducer.jsx
    Version: 1.5.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
export default function reducer(state={
  city: null,
  state: null,
  temperature: null,
  unit: null,
  condition: null,
  location: 'Fetching...',
  weather: null,
  weatherIcon: null,
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
            temperature: action.payload.temperature,
            unit: action.payload.unit,
            location: action.payload.city + ', ' + action.payload.stateCode,
            weather: action.payload.temperature+'° ' + action.payload.unit,
            weatherIcon: action.payload.weatherIcon != null ?  action.payload.weatherIcon : 'wi wi-thermometer 2x'
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
