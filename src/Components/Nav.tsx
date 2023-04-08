import Logo from "./Logo";
import { Menu, menuItem } from "./Menu";
import "./Nav.css";
import React, { useEffect } from "react";

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

  const [activeIdx, setActiveIdx] = React.useState<number | undefined>(
    handleNavActive()
  );

  function handleNavActive(): number | undefined {
    const address: string = document.location.href.slice(
      document.location.origin.length
    );
    console.log(address);
    for (let i: number = 0; i < menuList.length; i++) {
      if (address === menuList[i].href || address === menuList[i].href + "/") {
        return i;
      }
    }
    return undefined;
  }

  useEffect(() => {
    setActiveIdx(handleNavActive());
  }, []);

  return (
    <nav>
      <Logo nameFirst="Thoughtless" nameSecond="Nerd" />
      <Menu list={menuList} activeItem={activeIdx}></Menu>
    </nav>
  );
};

export default Nav;
