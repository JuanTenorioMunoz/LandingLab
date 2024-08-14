import Textlink from "../Textlink/Textlink";


interface NavbarProps {
    text: string;
}

const Navbar = ({text}:NavbarProps) => {
    return(
        <nav className="navbar">
            <img src='../../assets/images/svg/logo-platypus-white.svg'></img>
            <h1 className="main-text-nav">{text}</h1>
            <Textlink name='DISCOVER' link='rr'></Textlink>
            <Textlink name='OUR BRANDS' link='rr'></Textlink>
            <Textlink name='ALL GAMES' link='rr'></Textlink>
            <Textlink name='ON SALE' link='rr'></Textlink>
            <Textlink name='PARADOX ARC' link='rr'></Textlink>
        </nav>
    )
}

export default Navbar;