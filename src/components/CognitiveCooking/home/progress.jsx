/*
    Title: progress.jsx
    Version: 1.5.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import $ from 'jquery';
import './progress.css';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import LeftDrawer from '../LeftDrawer/leftDrawer';

class ProgressComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
          completed: 0,
          windowHeight: 0,
          domHeight: 0,
          open: false,
          locationOpen: false
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

    handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      locationOpen: true,
      anchorEl: event.currentTarget,
      });
    };

    handleRequestClose = () => {
       this.setState({
         open: false,
       });
     };

    render() {
      //let progress = this.state.completed;
      const styles = {
        title: {
          cursor: 'pointer',
          fontFamily: 'Trattatello, fantasy',
          fontWeight: 'bold',
          fontStretch: 'ultra-expanded',
          fontSize: '30px',
        },
        social: {
          'display': 'flex',
          'justifyContent': 'space-between',
          'width': '70px',
          'margin': '15px'
        }
      };

      let socialIcons = (
         <div style={styles.social}>
          <a>
             <FontIcon className='fab fa-facebook-f' color='white' hoverColor='#4080FF' />
          </a>
          <a>
            <FontIcon className='fab fa-twitter' color='white' hoverColor='#A2D9FA' />
          </a>
        </div>
       );

      return (
        <div className="progress">
          <AppBar
            titleStyle={{textAlign: "center"}}
            title={<span style={styles.title}>Cognitive Cooking</span>}
            style={{ backgroundColor: '#333333' }}
            onLeftIconButtonTouchTap={ this.handleToggle.bind(this)}
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
