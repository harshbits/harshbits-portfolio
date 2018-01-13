/*
    Title: geo-location.jsx
    Version: 1.0.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import axios from 'axios';

class GeoLocation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      location: 'Fetching...',
      latitude: '',
      longitude: '',
    };
  }

  getCityName(lat, lng) {
    console.log('Get Geo Location');
    //Post call
    axios.post('https://ubot-harsh-portfolio.herokuapp.com/v1/location', {
          latitude: lat,
          longitude: lng,
        },
        {
          headers: {
            'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response.data);
        if(response.data.city){
          this.setState({
            location: response.data.city + ', ' + response.data.stateCode
          })
        }else{
          this.setState({
            location: 'Unknown'
          })
        }

      })
      .catch(function (error) {
        console.log(error);
      });
  }

  componentDidMount() {
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.getCityName(position.coords.latitude, position.coords.longitude)
          this.setState({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            error: null,
          });
        },
        (error) => this.setState({ error: error.message,
          location: 'Unknown' }),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
      );
    }else{
      this.setState({
        location: 'Unknown'
      });
    }
  }

  render() {
    return (
      <div>
        <span style={{marginRight: 10, color: 'white'}}>{this.state.location}</span>
        <a onClick={this.handleClick}>
            <FontIcon className='fa fa-map-marker' color='white' hoverColor='#ADBAD5' />
        </a>
      </div>
    );
  }
}

export default GeoLocation;
