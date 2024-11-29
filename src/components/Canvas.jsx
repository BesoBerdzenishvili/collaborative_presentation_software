import React from "react";
import { Stage, Layer } from "react-konva";
import Shape from "./Shape";

const Canvas = ({ shapes, setSelectedId, refer }) => {
  const tools = [...Object.keys(shapes)];
  // const [st, setSt] = useState({
  //   isDragging: false,
  //   x: 50,
  //   y: 50,
  // });

  return (
    // if present mode make these 100% and max zindex or smt else to overlay

    <Stage
      width={window.innerWidth / 2}
      height={window.innerHeight}
      ref={refer}
    >
      <Layer>
        {tools.map((i) => {
          return shapes[i].map((j) => {
            return (
              <Shape key={j.id} shape={j} element={i} onClick={setSelectedId} />
            );
          });
        })}
      </Layer>
    </Stage>
  );
};

export default Canvas;
