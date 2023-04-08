import "../css/Logo.css";

interface logoProps {
  nameFirst: string;
  nameSecond: string;
}

const Logo = (props: logoProps) => {
  return (
    <span className="logo">
      <span className="color-main">{props.nameFirst}</span>
      <span className="color-vibrance">{props.nameSecond}</span>
    </span>
  );
};

export default Logo;
