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
              Loves Travelling, Cooking and Painting.
              Software Engineer, currently lives in Dallas, TX.
              </h3>
            </p>
          </div>
        );
    }
}

export default IntroductionComponent;
