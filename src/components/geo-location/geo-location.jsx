/*
    Title: geo-location.jsx
    Version: 1.5.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import FontIcon from 'material-ui/FontIcon';
import {connect} from 'react-redux';

import {fetchLocation} from "../../actions/locationActions";

class GeoLocation extends Component {

  componentDidMount() {
      this.props.dispatch(fetchLocation());
  }

  render() {
    return (
      <div>
        <span style={{marginRight: 12, color: 'white'}}>{this.props.location}</span>
        <a>
            <FontIcon className={this.props.weatherIcon} color='white' hoverColor='#ADBAD5' />
        </a>
        <span style={{marginRight: 10, marginLeft: 12, color: 'white'}}>{this.props.weather}</span>
        <a>
            <FontIcon className='fas fa-map-marker-alt' color='white' hoverColor='#C06766' />
        </a>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
    return {
        location: store.locationReducer.location,
        weather: store.locationReducer.weather,
        weatherIcon: store.locationReducer.weatherIcon
    };
};

export default connect(mapStateToProps)(GeoLocation);
