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
          color: '#333333',
          fontFamily: 'Trattatello, fantasy',
          fontWeight: 'bold',
          fontSize: '30px',
        },
        menuItem: {
          color: '#333333',
          fontFamily: 'Trattatello, fantasy',
          textAlign: 'center',
          fontSize: '20px',
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
            <MenuItem primaryText="ASK EUNICE"  />
            <Divider />
            <MenuItem primaryText="RECIPES" />
            <Divider />
            <MenuItem primaryText="RECIPE TIPS" />
            <Divider />
            <MenuItem primaryText="RESTAURANTS"  />
          </Menu>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default LeftDrawer;
