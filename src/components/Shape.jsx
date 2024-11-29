import React from "react";
import { Star, Rect, Text, Circle } from "react-konva";

export default function Shape({ shape, element, onClick }) {
  // const handleDragStart = (e) => {
  //   const id = e.target.id();
  //   setStars(
  //     stars.map((star) => {
  //       return {
  //         ...star,
  //         isDragging: star.id === id,
  //       };
  //     })
  //   );
  // };
  // const handleDragEnd = (e) => {
  //   setStars(
  //     stars.map((star) => {
  //       return {
  //         ...star,
  //         isDragging: false,
  //       };
  //     })
  //   );
  // }
  const click = { onClick: () => onClick(shape.id) };
  switch (element) {
    // assign dry props from props as ...restProps
    // x, y, fill, id
    case "circles":
      return (
        <Circle
          x={shape.x}
          y={shape.y}
          radius={shape.radius}
          fill={shape.fill}
          draggable
          {...click}
        />
      );
    case "rects":
      return (
        <Rect
          x={shape.x}
          y={shape.y}
          width={shape.width}
          height={shape.height}
          fill={shape.fill}
          shadowBlur={shape.shadowBlur}
          draggable
          {...click}
        />
      );
    case "texts":
      return (
        <Text
          text={shape.text}
          x={shape.x}
          y={shape.y}
          draggable
          fill={shape.fill}
          fontSize={shape.fontSize}
          {...click}
          // onDragStart={() => {
          //   setSt({
          //     isDragging: true,
          //   });
          // }}
          // onDragEnd={(e) => {
          //   setSt({
          //     isDragging: false,
          //     x: e.target.x(),
          //     y: e.target.y(),
          //   });
          // }}
        />
      );
    case "stars":
      return (
        <Star
          key={shape.id}
          id={shape.id}
          x={shape.x}
          y={shape.y}
          fill={shape.fill}
          numPoints={5}
          innerRadius={17}
          outerRadius={44}
          draggable
          rotation={4}
          shadowColor="black"
          shadowBlur={1}
          {...click}
          // shadowOffsetX={star.isDragging ? 10 : 5}
          // shadowOffsetY={star.isDragging ? 10 : 5}
          // scaleX={star.isDragging ? 1.2 : 1}
          // scaleY={star.isDragging ? 1.2 : 1}
          // onDragStart={handleDragStart}
          // onDragEnd={handleDragEnd}
        />
      );
  }
}
