import React from "react";
import ScrollableFeed from "react-scrollable-feed";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
function Chat({ user, message, sendMessage, setMessage, messages,logout }) {

 
  let date = new Date();
  const options = date.toLocaleDateString(
    "en-US",
    
     {
     hour: "2-digit" ,
     minute: "2-digit" ,
     hour12: "true" ,
     }
  );
  const time = options.split(",").pop()
  
  return (
    <div className="card w-100 ">
      <div className="row card-content ">
        <div className="card-list col-md-12 chat-window">
          <ChatHeader user={user} setMessage={setMessage} logout={logout} />
          <div className="chat-height">
            <ScrollableFeed>
              <div className="column mt-3 justify-content-center">
                {messages.map((message, i) => {
                  return message.type === "userStatus" ? (
                    <div className="text-center" key={i}>
                      <p className="bg-info badge m-0">
                        {" "}
                        {message.userId === user.userId
                          ? "You have Joined!"
                          : `${message.username} has Join`}
                      </p>
                    </div>
                  ) : (
                    <div
                      key={i}
                      className={
                        message.userId === user.userId
                          ? "chat-message-right pd-4"
                          : "chat-message-left pd-4"
                      }
                    >
                      <div className="mx-3 my-2">
                        <img
                          width="40px"
                          height="40px"
                          src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"
                          alt={message.username}
                          title={message.username}
                          className=" rounded-circle mx-1"
                        />
                        <div className="text-muted text-nowrap mt-2 ">
                          
                        </div>
                      </div>

                      <div className="flex-shrink-1 chat-message bg-light rounded py-2 px-3 ms-1 my-2">
                        <div className="fw-bold mb-1">
                          {message.userId === user.userId
                            ? "You"
                            : message.username}
                        </div>
                        {message.message}
                        <div className="d-flex justify-content-end text-muted">

                        {time}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollableFeed>
          </div>
          <ChatInput
            sendMessage={sendMessage}
            message={message}
            setMessage={setMessage}
          />
        </div>
      </div>
    </div>
  );
}

export default Chat;
