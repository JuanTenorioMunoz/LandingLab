interface NavbarProps {
    text: string;
}

const Navbar = ({text}:NavbarProps) => {
    <nav>
        <a>{text}</a>
    </nav>
}

export default Navbar;