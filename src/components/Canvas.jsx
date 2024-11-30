import React from "react";
import { Stage, Layer } from "react-konva";
import Shape from "./Shape";

const Canvas = ({ shapes, setSelectedId, refer, scale, handleDragMove }) => {
  const tools = [...Object.keys(shapes)];

  return (
    <Stage
      width={window.innerWidth / 1.3333}
      height={window.innerHeight}
      ref={refer}
      scaleX={scale}
      scaleY={scale}
    >
      <Layer>
        {tools.map((i) => {
          return shapes[i].map((j) => {
            return (
              <Shape
                key={j.id}
                shape={j}
                element={i}
                onMouseDown={setSelectedId}
                x={j.x}
                y={j.y}
                fill={j.fill}
                draggable
                onDragEnd={(e) =>
                  handleDragMove(j.id, i, e.target.x(), e.target.y())
                }
              />
            );
          });
        })}
      </Layer>
    </Stage>
  );
};

export default Canvas;
