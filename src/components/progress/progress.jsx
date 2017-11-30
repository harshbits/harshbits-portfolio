import React, {Component} from 'react';
import $ from 'jquery';
import './progress.css';
import AppBar from 'material-ui/AppBar';
import LeftDrawer from '../LeftDrawer/leftDrawer';
import IconButton from 'material-ui/IconButton';
import MenuItem from 'material-ui/MenuItem';
import Menu from 'material-ui/svg-icons/navigation/menu';
import {white} from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import ChatBox from '../chatbox/chatbox';

class ProgressComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          completed: 0,
          windowHeight: 0,
          domHeight: 0,
          open: false
        };
    }

    async componentDidMount() {
      this.setHeights();
      window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll.bind(this));
    }

    setHeights() {
      this.setState({
        domHeight: $('body').height(),
        windowHeight: $(window).height()
      });
    }

    handleScroll(){
      const scrollTop = $('body').scrollTop();
      let position = Math.round((scrollTop / this.state.domHeight) * 100);
      if(position > 98) position = 100;
      this.setState({
          completed: position + '%'
      });
    }


    handleToggle = () => this.setState({open: !this.props.open});

    handleClose = () => this.setState({open: false});


    render() {
        let progress = this.state.completed;

    const styles = {
      'social': {
        'display': 'flex',
        'justifyContent': 'space-between',
        'width': '150px',
        'margin': '15px'
      }
    };

        let socialIcons = (
         <div style={styles.social}>
           <a href='https://www.facebook.com/harshbits/'target='_blank'>
             <FontIcon className='fa fa-facebook-official' color='white' hoverColor='#ADBAD5' />
          </a>
          <a href='https://twitter.com/harshbits2110/' target='_blank'>
            <FontIcon className='fa fa-twitter' color='white' hoverColor='#A2D9FA' />
          </a>
          <a href='https://github.com/harshbits/' target='_blank'>
            <FontIcon className='fa fa-github' color='white' hoverColor='#979797' />
          </a>
          <a href='https://www.linkedin.com/in/harshbhavsar21/' target='_blank'>
            <FontIcon className='fa fa-linkedin-square' color='white' hoverColor='#97C1D5' />
          </a>
          <a href='https://plus.google.com/u/0/+HarshBhavsar2110/' target='_blank'>
            <FontIcon className='fa fa-google-plus' color='white' hoverColor='#C06766' />
          </a>

       </div>
       );
        return (
          <div className="progress">
            <div
              className="progress-bar"
              style={{"width": progress}}>
            </div>
            <AppBar
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              style={{ backgroundColor: '042D70' }}
              onLeftIconButtonTouchTap = { this.handleToggle.bind(this)}
              iconElementRight={socialIcons}
            />
            <LeftDrawer open={this.state.open}
              handleClose={this.handleClose}
               />
          </div>
        );
    }
}

export default ProgressComponent;
