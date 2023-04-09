interface FloatingElementsProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const FloatingElements: React.FC<FloatingElementsProps> = (
  props: FloatingElementsProps
) => {
  return <div className={props.className}>{props.children}</div>;
};

export default FloatingElements;
