interface IndexerProps {
  type: "row" | "column";
  count: number;
  style?: React.CSSProperties;
}

const Indexer: React.FC<IndexerProps> = (props: IndexerProps) => {
  console.log(document.querySelector(".indexer")?.parentElement?.children);
  return (
    <>
      <div style={props.style} className="indexer">
        Indexer
      </div>
    </>
  );
};

export default Indexer;
