import React, { useEffect, useState } from "react";

//login

import Login from "./Login";
//chat
import Chat from "./Chat";
import { Navigate } from 'react-router-dom';
const Main = ({ socket }) => {
  const [newUser, setNewUser] = useState("");
  const [user, setUser] = useState({username:'',userId:''});
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  
  useEffect(() => {
    // socket.on("connect",()=>{
    //   console.log("connected");
    // })
    socket.on("users", (users) => {
      const messageArr = [];
      for (let { userId, username } of users) {
        const newMessage = { type: "userStatus", userId, username };
        messageArr.push(newMessage);
      }
      setMessages([...messages, ...messageArr]);
      setUsers(users);
    });
    socket.on("session", ({ username, userId }) => {
      setUser(username, userId);
    });
    socket.on("user connection", ({ username, userId }) => {
      const newMessage = { type: "userStatus", userId, username };
      setMessages([...messages, newMessage]);
    });
    socket.on("new message", ({ userId, username, message }) => {
      const newMessage = {
        type: "message",
        userId: userId,
        username: username,
        message,
      };
      setMessages([...messages, newMessage]);
    });
  }, [socket, messages]);
  function sendMessage() {
    socket.emit("new message", message);
    let newMessage = {
      type: "message",
      userId: user.userId,
      username: user.username,
      message,
    };
    setMessages([...messages,newMessage]);
    setMessage("");
  }
  function handleChange({ currentTarget: input }) {
    setNewUser(input.value);
    
  }
  function logNewUser() {
    setUser(user.username=newUser);
    socket.auth = { username: newUser };
    // socket.auth.username = newUser ;
    socket.connect();
  }
  function logout(){
    setUser({userId:""});
    
   
  }
  return (
    <>
      <div className="content">
        <div className="container mt-3 ">
          { user.userId !== '' ? (
            <Chat
              user={user}
              sendMessage={sendMessage}
              messages={messages}
              message={message}
              setMessage={setMessage}
              logout={logout}
            />
          ) : (
            <Login
              handleChange={handleChange}
              newUser={newUser}
              logNewUser={logNewUser}
            />
          )
          }
        </div>
      </div>
    </>
  );
};

export default Main;
