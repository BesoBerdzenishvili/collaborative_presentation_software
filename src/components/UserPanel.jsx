import React from "react";
import User from "./User";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function UserPanel({
  setShow,
  setAlertMessage,
  setAlertVariant,
}) {
  const reactNavigator = useNavigate();
  const { roomId } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const username = query.get("username");

  const leaveRoom = () => {
    // if(!socket) return;
    // socket.emit('leave-room', { roomId, username });
    reactNavigator("/");
  };
  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    setShow(true);
    setAlertMessage("Copied to clipboard!");
    setAlertVariant("success");
  };
  const clients = [
    "name 7",
    "name 2",
    "name 4",
    "name 4",
    "name 4",
    "name 7",
    "name 2",
    "zb5lze5j",
    "name 4",
    "name 4",
    "name 7",
    "name 2",
    "name 4",
    "name 4",
    "name 4",
    "q",
  ];
  return (
    <aside className="bg-primary w-25 px-3 clients-list d-flex flex-column justify-content-between overflow-auto">
      <div>
        <h3 className="sticky-top bg-primary py-3">Connected...</h3>
        <div className="d-flex flex-wrap my-4 ">
          {clients.map((client, index) => (
            <User
              key={index}
              username={client}
              isCurrent={client === username}
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
