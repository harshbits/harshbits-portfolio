/*
    Title: CognitiveCooking.jsx
    Version: 1.5.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import LeftDrawer from './LeftDrawer/leftDrawer';
import Paper from 'material-ui/Paper';

class CognitiveCooking extends Component {

  constructor(props) {
      super(props);
      this.state = {
        open: false
      };
  }

  handleToggle = () => this.setState({open: !this.props.open});

  handleClose = () => this.setState({open: false});

  render() {
    const styles = {
      title: {
        cursor: 'pointer',
      },
      paper: {
         height: 100,
         width: 400,
         marginTop: 100,
         textAlign: 'center',
         display: 'inline-block',
      }
    };
    return (
      <MuiThemeProvider>
        <div className="CognitiveCooking">
          <AppBar
            titleStyle={{textAlign: "center"}}
            title={<span style={styles.title}>Cognitive Cooking</span>}
            style={{ backgroundColor: '#000000' }}
            onLeftIconButtonTouchTap={ this.handleToggle.bind(this)}
          />
          <LeftDrawer open={this.state.open}
            handleClose={this.handleClose}
          />
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Paper style={styles.paper} zDepth={1} >
              <h1>Coming Soon...</h1>
            </Paper>
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}

export default CognitiveCooking;
