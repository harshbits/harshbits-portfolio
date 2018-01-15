/*
    Title: locationActions.jsx
    Version: 1.5.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import axios from 'axios';

export function fetchLocation(){

  return function(dispatch){
    navigator.geolocation.getCurrentPosition(
      (position) => {
          axios.post('https://ubot-harsh-portfolio.herokuapp.com/v1/location', {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
            {
              headers: {
                'Content-Type': 'application/json'
            }
          })
          .then(response => {
            console.log(response.data);
            dispatch({type:'FETCH_LOCATION_FULFILLED', payload:response.data});
          })
          .catch(function (error) {
            console.log(error);
            dispatch({type:'FETCH_LOCATION_REJECTED', payload:error})
          });
      },
      (error) => {
        console.log('Geo Location Not Available');
        dispatch({type:'FETCH_LOCATION_REJECTED', payload:error})
      },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }
}
