import { Navigate } from "react-router-dom";
import Login from "./Login";
const ChatHeader = ({user,logout }) => {
 
    return <>
           <div className="card-item ">
            <div className="d-flex align-items-center py-1 float-start">
              <div className="position-relative border-none">
                <img
                  width="45px"
                  height="45px"
                  src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"
                  alt={user}
                  className=" rounded-circle mx-2"
                />
              </div>
              
              <div>
                <h5>Logged In as {user}</h5>
              </div>
            </div>
              <div className="float-end mt-2">
                <button className="btn btn-light" onClick={logout}>Logout</button>
              </div>
          </div>
    </>;
}
 
export default ChatHeader;