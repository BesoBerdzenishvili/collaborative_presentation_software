import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import AlertMessage from "../components/AlertMessage";
import uniqid from "uniqid";

const Home = ({ userList, setUserList, setCurrentUser }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");
  const [show, setShow] = useState(false);

  const handleCreateRoom = () => {
    const newRoomId = Math.random().toString(36).substring(2, 10);
    setRoomId(newRoomId);
    setShow(true);
  };

  const addUserToList = (newUser) => {
    setUserList([...userList, newUser]);
  };

  const handleJoinRoom = (e) => {
    if (roomId && username) {
      const newUser = {
        id: uniqid(),
        name: username,
        roomId: roomId,
        status: userList.filter((i) => i.roomId == roomId).length
          ? "viewer"
          : "creator",
      };
      setCurrentUser(newUser);
      addUserToList(newUser);
      e.preventDefault();
      navigate(`/editor/${roomId}?username=${username}`);
    }
  };

  return (
    <div className="bg-primary position-absolute top-50 start-50 translate-middle p-3 rounded-3">
      {show && (
        <AlertMessage
          variant={"success"}
          text="Created New Room"
          show={show}
          setShow={setShow}
        />
      )}
      <Form onSubmit={handleJoinRoom}>
        <Form.Group className="mb-3">
          <Form.Label>Room Id</Form.Label>
          <br />
          <Form.Control
            type="text"
            placeholder="Enter room Id"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <br />
          <Form.Control
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <div className="d-flex justify-content-between mt-4">
          <Button variant="outline-light" type="submit">
            Login
          </Button>
          <Button variant="outline-light" onClick={handleCreateRoom}>
            New Room
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Home;
