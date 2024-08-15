import Textlink from "../Textlink/Textlink";
import './Navbar.css'

interface NavbarProps {
    text: string;
}

const Navbar = ({text}:NavbarProps) => {
    return(
        <nav className="navbar">
            <img id="paradoxNav"src='https://raw.githubusercontent.com/LeJuanTenorio/LandingLab/9bcfdde4a8de2f588ab48f1ca959cbc99c2b80d5/src/assets/images/svg/logo-platypus-white.svg'></img>
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