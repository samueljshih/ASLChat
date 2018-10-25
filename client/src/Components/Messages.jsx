import React from 'react';

const Messages = props => {
  return (
    <div>
      <h1>Messages</h1>
      <ul className="messagesList">
        {props.messages.map(message => {
          return (
            <li key={message.id}>
              <div>{message.senderId}</div>
              <div>{message.text}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Messages;
