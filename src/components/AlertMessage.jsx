import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

export default function AlertMessage({
  variant = "light",
  text = "",
  show,
  setShow,
}) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => setShow(false), 4000);

      return () => clearTimeout(timer);
    }
  }, [show, setShow]);

  if (!show) return null;

  return (
    <Alert
      key={variant}
      variant={variant}
      className="position-absolute text-center top-50 start-50 translate-middle"
    >
      {text}
    </Alert>
  );
}
