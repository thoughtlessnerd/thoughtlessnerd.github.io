interface menuButton {
    label: string;
    onclick?: Function;
    href?: string;
    hoverClass?: string;
}

const MenuButton = (props: menuButton) => {
    const hoverClass = props.hoverClass ?? "";
    return (
        <button
            className="menuButton"
            onMouseEnter={(e) => {
                const target = e.target as Element;
                target.classList.add(hoverClass);
            }}
            onMouseLeave={(e) => {
                const target = e.target as Element;
                target.classList.remove(hoverClass);
            }}
        >
            {props.href && <a href={props.href}>{props.label}</a>}
            {!props.href && props.label}
        </button>
    );
};

export default MenuButton;
