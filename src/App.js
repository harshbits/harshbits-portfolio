/*
    Title: App.js
    Version: 1.5.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import Main from './Main';
import 'roboto-npm-webfont';
import HttpsRedirect from './components/https-redirect/https-redirect';

class App extends Component {
  render() {
    return (
        <HttpsRedirect>
          <Main />
        </HttpsRedirect>
    );
  }
}

export default App;
