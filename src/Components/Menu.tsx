import MenuButton from "./MenuButton";
import "./menu.css";

export interface menuItem {
    label: string;
    href?: string;
}

interface menuProps {
    list: menuItem[];
    activeItem: number | undefined;
}

export const Menu = (props: menuProps) => {
    return (
        <ul className="menu">
            {props.list.map((elem, idx) => {
                return (
                    <li>
                        {idx === props.activeItem && (
                            <MenuButton
                                href={elem.href}
                                label={elem.label}
                                active={true}
                            />
                        )}
                        {idx !== props.activeItem && (
                            <MenuButton href={elem.href} label={elem.label} />
                        )}
                    </li>
                );
            })}
        </ul>
    );
};
