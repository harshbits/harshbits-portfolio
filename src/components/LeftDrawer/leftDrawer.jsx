/*
    Title: leftDrawer.jsx
    Version: 1.5.1
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
import { Link } from 'react-router-dom';

class LeftDrawer extends Component {

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
            <MenuItem leftIcon={<FontIcon className='fas fa-utensils' />}
              containerElement={<Link to="/cognitive-cooking" />} target="_blank">Cognitive Cooking</MenuItem>
            <MenuItem leftIcon={<FontIcon className='fab fa-pagelines' />}
            href="http://ieeexplore.ieee.org/document/6915416/" target="_blank" >Advanced Farming</MenuItem>
            <MenuItem leftIcon={<FontIcon className='fa fa-home' />}
            href="https://github.com/harshbits/project-u-bot" target="_blank">Home Coumputing</MenuItem>
          <Divider />
            <MenuItem leftIcon={<FontIcon className='fas fa-code' />}
            href="https://github.com/harshbits/grpc-spring-boot-services/" target="_blank">gRPC-Spring Boot</MenuItem>
          <Divider />
            <MenuItem leftIcon={<FontIcon className='fas fa-file-pdf' />}
             href="/Resume_Harsh.pdf" target="_blank">My Résumé</MenuItem>
          </Menu>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default LeftDrawer;
