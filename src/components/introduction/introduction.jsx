/*
    Title: introduction.jsx
    Version: 1.0.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={300}/>
            <p className="introduction-text">
              <h3>
              I Love Travelling, Cooking and Painting.
              Software Engineer, currently lives in Dallas, TX.
              </h3>
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
