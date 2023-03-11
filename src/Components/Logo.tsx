import "./Logo.css";

interface logoProps {
    nameFirst: string;
    nameSecond: string;
    nameThird: string;
}

const Logo = (props: logoProps) => {
    return (
        <span className="logo color-main">
            {props.nameFirst}
            <span className="color-vibrance">{props.nameSecond}</span>
            {props.nameThird}
        </span>
    );
};

export default Logo;
