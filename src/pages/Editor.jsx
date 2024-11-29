import { useEffect, useState, useRef } from "react";
import UserPanel from "../components/UserPanel";
import AlertMessage from "../components/AlertMessage";
import Canvas from "../components/Canvas";
import Tools from "../components/Tools";
import jsPDF from "jspdf";

export default function Editor() {
  const [show, setShow] = useState(false);
  const [scale, setScale] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("light");
  const stageRef = useRef(null);

  const handleExportPDF = () => {
    const stage = stageRef.current;
    if (stage) {
      const imageData = stage.toDataURL();
      const pdf = new jsPDF();
      pdf.addImage(imageData, "JPEG", 0, 0);
      pdf.save("konva-canvas.pdf");
    } else {
      console.error("Stage is not ready yet.");
    }
  };

  const [shapes, setShapes] = useState({
    texts: [
      {
        id: "123",
        text: "test",
        x: 400,
        y: 400,
        fill: "green",
        fontSize: 24,
      },
    ],
    rects: [
      {
        id: "1",
        x: 20,
        y: 50,
        width: 100,
        height: 100,
        fill: "red",
        shadowBlur: 10,
      },
      {
        id: "3",
        x: 50,
        y: 190,
        width: 100,
        height: 100,
        fill: "#fff",
        shadowBlur: 10,
      },
    ],
    circles: [{ id: "2", x: 200, y: 100, radius: 50, fill: "green" }],
    stars: [
      {
        id: "4",
        fill: "orange",
        x: 300,
        y: 300,
      },
    ],
  });

  const changeColor = (newFill) => {
    setShapes((prevShapes) => {
      const updateFill = (items) =>
        items.map((item) =>
          item.id === selectedId ? { ...item, fill: newFill } : item
        );

      return {
        ...prevShapes,
        texts: updateFill(prevShapes.texts),
        rects: updateFill(prevShapes.rects),
        circles: updateFill(prevShapes.circles),
        stars: updateFill(prevShapes.stars),
      };
    });
  };

  const addText = () => {
    const newText = {
      id: Math.random(),
      text: "New Text",
      x: 400,
      y: 400,
      fill: "green",
      fontSize: 24,
    };
    setShapes((prevShapes) => ({
      ...prevShapes,
      texts: [...prevShapes.texts, newText],
    }));
  };

  const addRect = () => {
    const newRect = {
      id: Math.random(),
      x: 20,
      y: 50,
      width: 100,
      height: 100,
      fill: "red",
      shadowBlur: 10,
    };
    setShapes((prevShapes) => ({
      ...prevShapes,
      rects: [...prevShapes.rects, newRect],
    }));
  };

  const addCircle = () => {
    const newCircle = {
      id: Math.random(),
      x: 200,
      y: 100,
      radius: 50,
      fill: "green",
    };
    setShapes((prevShapes) => ({
      ...prevShapes,
      circles: [...prevShapes.circles, newCircle],
    }));
  };

  const addStar = () => {
    const newStar = {
      id: "4",
      fill: "orange",
      x: 300,
      y: 300,
    };
    setShapes((prevShapes) => ({
      ...prevShapes,
      stars: [...prevShapes.stars, newStar],
    }));
  };

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    setScale(Math.max(0.1, scale - 0.1));
  };

  return (
    <div className="d-flex flex-column">
      {show && (
        <AlertMessage
          text={alertMessage}
          show={show}
          setShow={setShow}
          variant={alertVariant}
        />
      )}
      <Tools
        addStar={addStar}
        addCircle={addCircle}
        addRect={addRect}
        addText={addText}
        changeColor={changeColor}
        handleExportPDF={handleExportPDF}
        handleZoomIn={handleZoomIn}
        handleZoomOut={handleZoomOut}
      />
      <div className="d-flex">
        <Canvas
          className="w-50"
          shapes={shapes}
          setSelectedId={setSelectedId}
          refer={stageRef}
          scale={scale}
        />

        <UserPanel
          setShow={setShow}
          setAlertMessage={setAlertMessage}
          setAlertVariant={setAlertVariant}
        />
      </div>
    </div>
  );
}
