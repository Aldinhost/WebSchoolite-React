import {Component, useState} from 'react';
import { FaBars,FaTimes } from "react-icons/fa";
// import { MenuItems } from './menuItems';
import ModalNavbar from '../navbar/Modal';
import './nav.scss';
import SubMenu from './submenu';

class NavbarOwn extends Component {
  
  state = {clicked: false}
  handleClick = () =>{
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    
      const [navbarWhite, setNavbarWhite] = useState(false);
    
      
      
      const navFixed = () => {
        if(window.scrollY >= 80){
          setNavbarWhite(true);
        }else{
          setNavbarWhite(false);
        }
        
      }
      
      window.addEventListener('scroll', navFixed);
      
      
      return(
            <nav className='NavbarItems'>
               
                <div className='NavbarItems__logo'>
                  <div className='NavbarItems__logo-image'>
                    <a href="/">
                      <img src="../../src/assets/logo_ica_noText.png" alt="logo" />
                    </a>
                  </div>

                  <a href="/"><h1 className='navbar-logo'>Instituto Cultural Azteca</h1></a>
                </div>
                
                <div className='menu-icons' onClick={this.handleClick}>
                   {this.state.clicked ? <FaTimes/> : <FaBars/>} 
                    
                </div>

                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href="/nosotros">Nosotros</a></li>
                    <li><a href="/admisiones">Admisiones</a></li>
                    <li> <SubMenu/></li>
                    <li><a href="/contacto">Contacto</a></li>
                    <div className='navbar__modalBtn'>
                      {<ModalNavbar/>}
                    </div>
                </ul>
            </nav>
        )
    }
}


export default NavbarOwn;