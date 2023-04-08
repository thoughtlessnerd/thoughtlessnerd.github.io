import Logo from "./Logo";
import { Menu, menuItem } from "./Menu";
import "./Nav.css";

const Nav: React.FC = () => {
  const menuList: menuItem[] = [
    {
      label: "Home",
      href: "/#",
    },
    {
      label: "Projects",
      href: "/#/Projects",
    },
    {
      label: "About",
      href: "/#/About",
    },
    {
      label: "Blogs",
      href: "/#/Blogs",
    },
    {
      label: "Contact me",
      href: "/#/Contact",
    },
  ];

  let activeIdx: number | undefined = undefined;
  const address: string = document.location.href.slice(
    document.location.origin.length
  );
  console.log(address);
  for (let i: number = 0; i < menuList.length; i++) {
    if (address === menuList[i].href) {
      activeIdx = i;
      break;
    }
  }

  return (
    <nav>
      <Logo nameFirst="Thoughtless" nameSecond="Nerd" />
      <Menu list={menuList} activeItem={activeIdx}></Menu>
    </nav>
  );
};

export default Nav;
