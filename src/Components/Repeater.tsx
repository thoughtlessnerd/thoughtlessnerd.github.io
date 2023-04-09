interface RepeaterProps {
  children: React.ReactNode;
  count: number;
  direction: "row" | "column";
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
}

const Repeater: React.FC<RepeaterProps> = (props: RepeaterProps) => {
  let arr = [];
  for (let i = 0; i < props.count; i++) {
    arr.push(
      <span
        style={{
          transform: `scale(${
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
