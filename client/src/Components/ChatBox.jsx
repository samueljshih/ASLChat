import React from 'react';

const ChatBox = props => {
  const { userMessage, onSubmit, onChange } = props;
  return (
    <div>
      <div className="chat-window">
        <div className="conversation-view">Chat</div>
        <div className="message-box">
          <form onSubmit={onSubmit}>
            <input
              onChange={onChange}
              value={userMessage}
              placeholder="Talk to Sam Bot"
              type="text"
              autoFocus
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
