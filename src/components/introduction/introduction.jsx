import React, {Component} from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


class IntroductionComponent extends Component {
    render() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpg" size={150}/>
            <p className="introduction-text">
              Loves Travelling, Cooking and Painting.
              Software Engineer, currently lives in Dallas, TX.
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
