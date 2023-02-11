import React  from "react";
import "./App.css";
import Main from './component/Main';
import { io } from 'socket.io-client';

const socket = io("http://localhost:3001")
function App() {
  
  return <>
  <Main socket={socket}/>
  </>;
}

export default App;
