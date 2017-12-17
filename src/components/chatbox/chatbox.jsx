/*
    Title: chatbox.jsx
    Version: 1.0.1
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/harshbits-portfolio/
*/
import React, {Component} from 'react';
import {render} from 'react-dom'
import './chatbox.css';
import {Launcher} from 'react-chat-window';
import messageHistory from '../../messageHistory';

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
export default ChatBox;
