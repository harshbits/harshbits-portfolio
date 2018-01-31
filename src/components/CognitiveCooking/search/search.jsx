/*
    Title: header.jsx
    Version: 1.5.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import SearchBar from './SearchBar'
const scrollTo = require('scroll-to');
import './search.css';

class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height,
          dataSource: []
        };
    }

     handleUpdateInput = (value) => {
       this.setState({
         dataSource: [
           value,
           value + value,
           value + value + value,
         ],
       });
     };

    updateDimensions() {
      this.setState({
        height:window.innerHeight+'px',
        scrollTo: window.innerHeight
      });
    }

    async componentDidMount() {
      window.addEventListener("resize", this.updateDimensions.bind(this));
      this.updateDimensions();
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    onScrollToIntro() {
        scrollTo(0, this.state.scrollTo, {
            ease: 'out-bounce',
            duration: 2000
        });
    }

    render() {
        const styles={
            findRecipe: {
              cursor: 'pointer',
              color: '#333333',
              fontFamily: 'Andale Mono, monospace',
              fontSize: '55px',
              fontWeight: 'bold',
            }
        };
        return (
          <div>
            <div className="header">
              <span style={styles.findRecipe}>FIND A RECIPE</span>
              <SearchBar />
            </div>
            <div className="scroll-down-btn">
              <FloatingActionButton backgroundColor="#8DABBE" onClick={this.onScrollToIntro.bind(this)}>
                <ArrowIcon />
              </FloatingActionButton>
            </div>
          </div>
        );
      }
}
export default SearchComponent;
