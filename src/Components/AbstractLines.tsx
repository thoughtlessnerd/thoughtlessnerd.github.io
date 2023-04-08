import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";
import "../css/AbstractLines.css";

interface AbstractLinesProps {
  count: number;
  direction: "row" | "column";
  styleType: string;
  lineWidth: number | ((i: number) => number);
  lineHeight: number | ((i: number) => number);
  lineColor: string;
  gap: number;
  centerHorizontally?: boolean;
  centerVertically?: boolean;
  className?: string;
  style?: React.CSSProperties;
  borderRadius?: number;
}

const AbstractLines: React.FC<AbstractLinesProps> = (
  props: AbstractLinesProps
) => {
  const [lines, setLines] = useState<JSX.Element[]>([]);

  const generateLines = () => {
    let data: JSX.Element[] = [];
    for (let i = 0; i < props.count; i++) {
      data.push(
        <span
          key={uuid().toString()}
          style={{
            width:
              typeof props.lineWidth === "number"
                ? props.lineWidth
                : props.lineWidth(i),
            background: props.lineColor,
            height:
              typeof props.lineHeight === "number"
                ? props.lineHeight
                : props.lineHeight(i),
            borderRadius: props.borderRadius ? props.borderRadius : 0,
          }}
        ></span>
      );
    }
    setLines(data);
  };

  useEffect(() => {
    generateLines();
  }, []);
  return (
    <div
      className={props.styleType + " " + props.className}
      style={{
        ...props.style,
        display: "flex",
        gap: props.gap,
        flexDirection: props.direction,
        alignItems: props.centerVertically ? "center" : "flex-start",
        justifyContent: props.centerHorizontally ? "center" : "flex-start",
      }}
    >
      {lines.map((line) => {
        return line;
      })}
    </div>
  );
};

export default AbstractLines;
