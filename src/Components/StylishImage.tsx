interface StylishImageProps {
  src: string;
  alt: string;
  styleType: string;
  className?: string;
  style?: React.CSSProperties;
}

const StylishImage: React.FC<StylishImageProps> = (
  props: StylishImageProps
) => {
  return <img src={props.src} alt={props.alt} className={props.className} />;
};

export default StylishImage;
