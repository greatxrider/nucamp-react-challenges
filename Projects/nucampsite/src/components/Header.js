import { Navbar, NavbarBrand } from 'reactstrap';
import NucampLogo from '../app/assets/img/logo.png';

const Header = () => {
    return (
        <div className='App'>
            <Navbar dark color='primary' stick='top' expand='md'>
                <NavbarBrand href='/'>
                    <img src={NucampLogo} alt='nucamp logo' />
                </NavbarBrand>
            </Navbar>
        </div>
    )
}

export default Header;
