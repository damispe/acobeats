import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/NavBar.css';

function NavBar(){
    return(
        <div>
            <nav className='topnav'>
                <li>
                    <Link to='/home' className='active'>Home</Link>
                    <Link to='/about' className='active'>About</Link>
                    <Link to='/contact' className='active'>Contacto</Link>
                    <Link to='/works' className='active'>Works</Link>
                </li>
            </nav>
        </div>
    )
};

export default NavBar;