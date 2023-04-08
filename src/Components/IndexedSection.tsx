import Indexer from "./Indexer";

export interface IndexedSectionProps {
  children: React.ReactNode;
  count: number;
  direction: "row" | "column";
  className?: string;
  style?: React.CSSProperties;
  index?: number;
  indexed?: boolean;
}

const IndexedSection: React.FC<IndexedSectionProps> = (
  props: IndexedSectionProps
) => {
  return (
    <div
      className={props.className}
      style={{
        display: "flex",
        flexDirection: props.direction,
        alignItems: "center",
        justifyContent: "center",
        ...props.style,
      }}
    >
      {props.children}
      <Indexer
        type={props.direction}
        count={props.count}
        style={{
          position: "absolute",
          display:
            props.indexed || props.indexed === undefined ? "flex" : "none",
          alignSelf: "end",
        }}
      />
    </div>
  );
};

export default IndexedSection;
