import { Star, Rect, Text, Circle } from "react-konva";

export default function Shape({ shape, element, onMouseDown, ...restProps }) {
  const click = { onMouseDown: () => onMouseDown(shape.id) };
  switch (element) {
    case "circles":
      return <Circle radius={shape.radius} {...click} {...restProps} />;
    case "rects":
      return (
        <Rect
          width={shape.width}
          height={shape.height}
          shadowBlur={shape.shadowBlur}
          {...click}
          {...restProps}
        />
      );
    case "texts":
      return (
        <Text
          text={shape.text}
          fontSize={shape.fontSize}
          {...click}
          {...restProps}
        />
      );
    case "stars":
      return (
        <Star
          numPoints={5}
          innerRadius={17}
          outerRadius={44}
          rotation={4}
          shadowColor="black"
          shadowBlur={1}
          {...click}
          {...restProps}
        />
      );
  }
}
