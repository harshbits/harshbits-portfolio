/*
    Title: leftDrawer.js
    Version: 1.0.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import './leftDrawer.css';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

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
            className='app-bar'
            title="Harsh Bhavsar"
            iconElementLeft={<Avatar src="avatar.jpg" style={{margin: '10px'}}/>}
            style={{ backgroundColor: '#217DBB', height: '72px' }} />
          <div className="section drawer" >
          <Menu>
            <MenuItem leftIcon={<FontIcon className='fa fa-cutlery' />}>Cognitive Cooking</MenuItem>
            <MenuItem leftIcon={<FontIcon className='fa fa-pagelines' />}
            linkButton={true} href="http://ieeexplore.ieee.org/document/6915416/" target="_blank" >Advanced Farming</MenuItem>
          <MenuItem leftIcon={<FontIcon className='fa fa-home' />}
            linkButton={true} href="https://github.com/harshbits/project-u-bot" target="_blank">
            Home Coumputing</MenuItem>
          <Divider />
          <MenuItem leftIcon={<FontIcon className='fa fa-code' />}
            linkButton={true} href="https://github.com/harshbits/grpc-spring-boot-services/" target="_blank">
            gRPC-Spring Boot</MenuItem>

          <Divider />
          <MenuItem leftIcon={<FontIcon className='fa fa-file-text' />}
            linkButton={true} href="/Resume_Harsh.pdf" target="_blank">
            My Résumé</MenuItem>
          </Menu>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default LeftDrawer;
