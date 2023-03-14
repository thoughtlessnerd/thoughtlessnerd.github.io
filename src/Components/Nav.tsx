import Logo from "./Logo";
import { Menu, menuItem } from "./Menu";
import "./Nav.css";

const Nav: React.FC = () => {
    const menuList: menuItem[] = [
        {
            label: "Home",
            hoverClass: "hoverMenuButton",
            href: "https://thoughtlessnerd.github.io",
        },
        {
            label: "Projects",
        },
        {
            label: "About",
        },
        {
            label: "Blogs",
        },
        {
            label: "Contact me",
        },
    ];
    return (
        <nav>
            <Logo nameFirst="Thought" nameSecond="less" nameThird="Nerd" />
            <Menu list={menuList}></Menu>
        </nav>
    );
};

export default Nav;
