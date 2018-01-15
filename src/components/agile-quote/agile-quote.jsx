/*
    Title: agile-quote.jsx
    Version: 1.5.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
                “There are two rules for success… 1.) Never reveal everything you know.”
              </span>
              <span className="quote-author">- Roger H. Lincoln</span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;
