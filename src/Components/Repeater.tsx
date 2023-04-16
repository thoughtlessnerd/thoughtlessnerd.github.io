interface RepeaterProps {
  children: React.ReactNode;
  count: number;
  direction: "row" | "column";
  height?: number | ((index: number) => number);
  width?: number | ((index: number) => number);
  transfromOrigin?: string;
  gap?: number;
  size?: {
    scaleX: number | ((index: number) => number);
    scaleY: number | ((index: number) => number);
  };
  translate?: {
    x: number | ((index: number) => number);
    y: number | ((index: number) => number);
  };
  rotate?: number | ((index: number) => number);
  className?: string;
  style?: React.CSSProperties;
  childStyle?: React.CSSProperties;
}

const Repeater: React.FC<RepeaterProps> = (props: RepeaterProps) => {
  let arr = [];
  console.log(props.size?.scaleX);
  for (let i = 0; i < props.count; i++) {
    arr.push(
      <span
        style={{
          ...props.childStyle,
          height: `${
            typeof props.height === "function" ? props.height(i) : props.height
          }px`,
          width: `${
            typeof props.width === "function" ? props.width(i) : props.width
          }px`,
          transformOrigin: props.transfromOrigin || "center",
          transform: `translate(${
            (typeof props.translate?.x === "function"
              ? props.translate?.x(i)
              : props.translate?.x) || 0
          }px, ${
            (typeof props.translate?.y === "function"
              ? props.translate?.y(i)
              : props.translate?.y) || 0
          }px) scale(${
            (typeof props.size?.scaleX === "function"
              ? props.size?.scaleX(i)
              : props.size?.scaleX) || 1
          }, ${
            (typeof props.size?.scaleY === "function"
              ? props.size?.scaleY(i)
              : props.size?.scaleY) || 1
          }) rotate(${
            (typeof props.rotate === "function"
              ? props.rotate(i)
              : props.rotate) || 0
          }deg)`,
        }}
      >
        {props.children}
      </span>
    );
  }
  return (
    <div
      style={{
        ...props.style,
        display: "flex",
        flexDirection: props.direction,
        gap: props.gap,
      }}
    >
      {arr}
    </div>
  );
};

export default Repeater;
