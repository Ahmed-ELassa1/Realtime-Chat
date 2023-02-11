import React from "react";

const ChatInput = ({sendMessage, message ,setMessage}) => {
    return <>
    <div className="message-list mt-auto mb-1 chat-input">
            <input
              type="text"
              className="message-input form-control"
              onKeyPress={ (e)=>e.code === "Enter" ? sendMessage() : null}
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Enter your message"
            />
            <button className="btn btn-info px-4">Send</button>
          </div>
    </>;
}
 
export default ChatInput;