import Logo from "./Logo";
import "./Nav.css";

const Nav: React.FC = () => {
    return (
        <nav>
            <Logo nameFirst="Thought" nameSecond="less" nameThird="Nerd" />
        </nav>
    );
};

export default Nav;
