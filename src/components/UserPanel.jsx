import React from "react";
import User from "./User";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import ChangeStatus from "./ChangeStatus";

export default function UserPanel({
  setShow,
  setAlertMessage,
  setAlertVariant,
  userList,
  setUserList,
  currentUser,
}) {
  const reactNavigator = useNavigate();

  const leaveRoom = () => {
    setUserList([...userList.filter((i) => i.id !== currentUser.id)]);
    reactNavigator("/");
  };
  const copyRoomId = () => {
    navigator.clipboard.writeText(currentUser.roomId);
    setShow(true);
    setAlertMessage("Copied to clipboard!");
    setAlertVariant("success");
  };

  return (
    <aside className="bg-primary w-25 px-3 clients-list d-flex flex-column justify-content-between overflow-auto">
      <div>
        <h3 className="sticky-top bg-primary py-3">Connected...</h3>
        <div className="d-flex flex-wrap my-4 ">
          {userList.map((user, index) => (
            <div className="d-flex flex-column align-items-center">
              <User
                key={index}
                username={user.name}
                isCurrent={user.name === currentUser.name}
              />
              {currentUser.status === "creator" &&
                user.id !== currentUser.id && (
                  <ChangeStatus
                    id={user.id}
                    userList={userList}
                    setUserList={setUserList}
                  />
                )}
            </div>
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
