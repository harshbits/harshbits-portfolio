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

class LeftDrawer extends Component {

    render() {
      const styles={
        title: {
          cursor: 'pointer',
          color: 'black',
        },
        menuItem: {
          color: 'black',
        }
    };

    return (
      <div>
        <Drawer
          width={300}
          docked={false}
          open={this.props.open}
          onRequestChange={(open) => this.props.handleClose()}
          >
          <AppBar
            titleStyle={{textAlign: "center"}}
            showMenuIconButton={false}
            title={<span style={styles.title}>Cognitive Cooking</span>}
            style={{ backgroundColor: '#FFDA08'}} />
          <div className="section drawer" >
          <Menu
            menuItemStyle={styles.menuItem} >
            <MenuItem primaryText="ASK EUNICE" leftIcon={<FontIcon className='fas fa-utensils' />} />
            <Divider />
            <MenuItem primaryText="RECIPES" leftIcon={<FontIcon className='fas fa-utensils' />} />
            <Divider />
            <MenuItem primaryText="RECIPE TIPS" leftIcon={<FontIcon className='fas fa-utensils' />} />
            <Divider />
            <MenuItem primaryText="RESTAURANTS" leftIcon={<FontIcon className='fas fa-utensils' />} />
          </Menu>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default LeftDrawer;
