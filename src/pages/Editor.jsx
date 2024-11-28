import { useState } from "react";
import UserPanel from "../components/UserPanel";
import AlertMessage from "../components/AlertMessage";

export default function Editor() {
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
