/*
    Title: chatbox.jsx
    Version: 1.5.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import './chatbox.css';
import {Launcher} from 'react-chat-window';
import messageHistory from '../../messageHistory';
import axios from 'axios';
import {connect} from 'react-redux';

class ChatBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
       messageList: messageHistory,
       newMessagesCount: 0
    };
  }

  _onMessageWasSent(message) {
    console.log('on message sent');
    this.setState({
      messageList: [...this.state.messageList, message]
    })

    //Post call
    axios.post('https://ubot-harsh-portfolio.herokuapp.com/v1/message', {
          type: 'text',
          author: "me",
          city: this.props.city,
          data: { text: message.data.text}
        },
        {headers: {
            'Content-Type': 'application/json'
        }
      })
      .then(response => {
        console.log(response.data);
        this.setState({
          messageList: [...this.state.messageList, response.data]
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  _sendMessage(text) {
    console.log('send message');
    if (text.length > 0) {
      const newMessagesCount = this.state.isOpen ? this.state.newMessagesCount : this.state.newMessagesCount + 1
      this.setState({
        newMessagesCount: newMessagesCount,
        messageList: [...this.state.messageList, {
          author: 'them',
          type: 'text',
          data: { text }
        }]
      })
    }
  }

  render() {
    return (
      <div>
      <Launcher
        agentProfile={{
          teamName: 'Eunice - Project UBot',
          imageUrl: '/ubot.png'
        }}
        onMessageWasSent={this._onMessageWasSent.bind(this)}
        messageList={this.state.messageList}
        newMessagesCount={this.state.newMessagesCount}
      />
    </div>);
  }
}

const mapStateToProps = (store) => {
    return {
        city: store.locationReducer.city
    };
};

export default connect(mapStateToProps)(ChatBox);
