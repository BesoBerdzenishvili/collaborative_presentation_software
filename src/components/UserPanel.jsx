import React from "react";
import User from "./User";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function UserPanel({
  setShow,
  setAlertMessage,
  setAlertVariant,
  userList,
  currentUser,
}) {
  const reactNavigator = useNavigate();
  const { roomId } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  // const username = query.get("username");
  // is query.get method removing username from url?

  const leaveRoom = () => {
    // if(!socket) return
    // socket.emit('leave-room', { roomId, username });
    reactNavigator("/");
  };
  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    setShow(true);
    setAlertMessage("Copied to clipboard!");
    setAlertVariant("success");
  };
  console.log(currentUser.name, "userList userPanel");

  return (
    <aside className="bg-primary w-25 px-3 clients-list d-flex flex-column justify-content-between overflow-auto">
      <div>
        <h3 className="sticky-top bg-primary py-3">Connected...</h3>
        <div className="d-flex flex-wrap my-4 ">
          {userList.map((user, index) => (
            <User
              key={index}
              username={user.name}
              isCurrent={user.name === currentUser.name}
            />
          ))}
        </div>
      </div>
      <div className="d-flex justify-content-between sticky-bottom bg-primary py-3">
        <Button variant="outline-light" onClick={copyRoomId}>
          Copy Room ID
        </Button>
        <Button variant="outline-light" onClick={leaveRoom}>
          Leave Room
        </Button>
      </div>
    </aside>
  );
}
