import { useState } from "react";
import UserPanel from "./UserPanel";
import AlertMessage from "./AlertMessage";

export default function EditorPage() {
  const [show, setShow] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("light");
  return (
    <>
      {show && (
        <AlertMessage
          text={alertMessage}
          show={show}
          setShow={setShow}
          variant={alertVariant}
        />
      )}
      <UserPanel
        setShow={setShow}
        setAlertMessage={setAlertMessage}
        setAlertVariant={setAlertVariant}
      />
    </>
  );
}
