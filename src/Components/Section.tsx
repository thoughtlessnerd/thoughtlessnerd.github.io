interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = (props: SectionProps) => {
  return <div className={props.className}>{props.children}</div>;
};

export default Section;
