/*
    Title: leftDrawer.js
    Version: 1.0.0
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import './leftDrawer.css';
// import { Link } from 'react-router';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';

class LeftDrawer extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Drawer
          docked={false}
          open={this.props.open}
          onRequestChange={(open) => this.props.handleClose()}
          >
          <AppBar
            title="Harsh Bhavsar"
            showMenuIconButton={false}
            style={{ backgroundColor: '#217DBB', height: '72px' }} />
          <Menu>
          <MenuItem leftIcon={<FontIcon className='fa fa-chef-hat' />}>Cognitive Cooking</MenuItem>
          <MenuItem>Advanced Farming System</MenuItem>
          <MenuItem>Home Coumputing System</MenuItem>
          </Menu>
        </Drawer>
      </div>
    );
  }
}

export default LeftDrawer;
