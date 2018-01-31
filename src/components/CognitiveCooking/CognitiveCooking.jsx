/*
    Title: CognitiveCooking.jsx
    Version: 1.5.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ProgressComponent from './home/progress';
import SearchComponent from './search/search';
import './CognitiveCooking.css';

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

    return (
      <MuiThemeProvider>
        <div>
          <ProgressComponent />
            <div className="search-section">
              <SearchComponent />
            </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default CognitiveCooking;
