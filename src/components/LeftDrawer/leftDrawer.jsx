import React, {Component} from 'react';
import Drawer from 'material-ui/Drawer';
import { Link } from 'react-router'
import MenuItem from 'material-ui/MenuItem';

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
          <MenuItem><a href="">Menu Item</a></MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default LeftDrawer;
