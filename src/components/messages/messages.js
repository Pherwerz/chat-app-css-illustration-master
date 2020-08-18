import React, { Component } from 'react';
import styles from './messages.module.scss';

class messages extends Component {
  render() {
    let msg = [styles.messages];

    switch (this.props.type) {
      case 'sent':
        msg = [...msg, styles.messagesSent].join(' ');
        break;
      case 'recieve':
        msg = [...msg, styles.messagesRecieve].join(' ');
        break;
      case 'radio':
        msg = [...msg, styles.messagesRadio].join(' ');
        break;
      default:
        msg = styles.messages;
    }
    return <div className={msg}>{this.props.children}</div>;
  }
}

export default messages;
