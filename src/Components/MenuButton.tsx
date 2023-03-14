interface menuButton {
    label: string;
    onclick?: Function;
    href?: string;
    active?: boolean;
}

const MenuButton = (props: menuButton) => {
    let classNames: string = props.active ? "menuButton active" : "menuButton";
    return (
        <button className={classNames}>
            {props.href && <a href={props.href}>{props.label}</a>}
            {!props.href && props.label}
        </button>
    );
};

export default MenuButton;
