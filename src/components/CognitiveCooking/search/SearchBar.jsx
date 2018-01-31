import React, {Component} from 'react';
import { AutoComplete, IconButton, Paper } from 'material-ui';

/**
 * The input is used to create the `dataSource`, so the input always matches three entries.
 */
class SearchBar extends Component {
  state = {
    dataSource: [],
  };

  handleUpdateInput = (value) => {
    this.setState({
      dataSource: [
        value,
        value + value,
        value + value + value,
      ],
    });
  };

  render() {
    const styles={
      root: {
        height: 60,
        width: 600,
        display: 'flex',
        justifyContent: 'space-between'
      },
      searchContainer: {
        margin: 'auto 16px',
        width: '100%'
      },
      input: {
        width: '100%'
      },
    };

    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Paper style={styles.root}>
          <div style={styles.searchContainer}>
            <AutoComplete
              hintText="Search by dish name"
              dataSource={this.state.dataSource}
              onUpdateInput={this.handleUpdateInput}
              fullWidth
              style={styles.input}
              underlineShow={false}
            />
          </div>
        </Paper>
      </div>
    );
  }
}

export default SearchBar
