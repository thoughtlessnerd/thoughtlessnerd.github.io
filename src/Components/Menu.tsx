import MenuButton from "./MenuButton";
import "./menu.css";

export interface menuItem {
    label: string;
    hoverClass?: string;
    href?: string;
}

interface menuProps {
    list: menuItem[];
}

export const Menu = (props: menuProps) => {
    return (
        <ul className="menu">
            {props.list.map((elem) => {
                return (
                    <li>
                        <MenuButton
                            href={elem.href}
                            label={elem.label}
                            hoverClass={elem.hoverClass}
                        />
                    </li>
                );
            })}
        </ul>
    );
};
