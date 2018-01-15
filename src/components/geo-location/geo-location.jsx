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
        <span style={{marginRight: 10, color: 'white'}}>{this.props.location}</span>
        <a onClick={this.handleClick}>
            <FontIcon className='fa fa-map-marker' color='white' hoverColor='#ADBAD5' />
        </a>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
    return {
        location: store.locationReducer.location
    };
};

export default connect(mapStateToProps)(GeoLocation);
