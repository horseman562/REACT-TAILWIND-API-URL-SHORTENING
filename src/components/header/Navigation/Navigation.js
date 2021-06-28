import React from 'react'
import PropTypes from 'prop-types'
import ShortlyLogo from '../../../images/logo.svg'
import './navigation.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react'
 

const Navigation = ({navLinks}) => {

    const[navactive, setNavactive] = useState(true)

    const toggleNav = () => {
        setNavactive(!navactive)
    }
     

    return (
        <nav className="flex justify-between items-center py-10">
            <img src={ShortlyLogo} alt="Shortly" className="logo" />
            <div className="flex justify-between items-center  width  active">
                <ul className="flex justify-between nav-link">
                {navLinks.map((navlink, index) => (
                    <li key={index} className=""><a href="#">{navlink}</a></li>
                ))} 
                </ul>
                    
                <ul className="flex justify-between nav-link-2  active">
                    <li><a href="#">Login</a></li>
                    <li><a href="#" className="nav-link-btn">Sign Up</a></li>
                </ul>

                 
            </div>
            
            <div className="mobile-menu-toggle" onClick={toggleNav}>
               {navactive ? <AiOutlineMenu /> : <AiOutlineClose />} 
            </div>

            <div className={navactive ? "remove" : "mobile-menu"}>
            <ul className="flex justify-around flex-col text-white items-center first-part">
                {navLinks.map((navlink, index) => (
                    <li key={index} className=""><a href="#">{navlink}</a></li>
                ))} 
                </ul> 
                <div className="line"></div>
            
                <ul className="flex justify-around flex-col text-white items-center second-part">
                    <li><a href="#">Login</a></li>
                    <li className="size flex justify-center"><a href="#" className="nav-link-btn">Sign Up</a></li>
                </ul>

            </div> 
                
            
            
        </nav>
    )
}

Navigation.defaultProps = {
    navLinks: ['Features', 'Pricing', 'Resources']
}


Navigation.propTypes = {
    navLinks: PropTypes.array.isRequired
}

 

export default Navigation
