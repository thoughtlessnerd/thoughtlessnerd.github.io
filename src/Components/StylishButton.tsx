import "../css/stylishButton.css";

interface StylishButtonProps {
  children: React.ReactNode;
  styleType: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: Function;
}

const StylishButton: React.FC<StylishButtonProps> = (
  props: StylishButtonProps
) => {
  return (
    <button
      className={props.className + " " + props.styleType}
      style={props.style}
      onClick={() => props.onClick && props.onClick()}
    >
      {props.children}
    </button>
  );
};

export default StylishButton;
