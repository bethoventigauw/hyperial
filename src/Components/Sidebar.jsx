import React, { useState } from 'react';
import sidebar_logo from '../Assets/logo/hyperial_logo_2.png';
import {
    FaTh,
    FaBars,
    FaShoppingCart,
    FaRegChartBar,
    FaSuiteCase,
    FaShoppingBag,
    FaUserCog,
    FaSuitcase
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/Sales",
            name:"Sales",
            icon:<FaShoppingBag/>
        },
        {
            path:"/Purchase",
            name:"Purchase",
            icon:<FaShoppingCart/>
        },
        {
            path:"/Inventory",
            name:"Inventory",
            icon:<FaSuitcase/>
        },
        {
            path:"/Projects",
            name:"Projects",
            icon:<FaRegChartBar/>
        },
        {
            path:"/Settings",
            name:"Settings",
            icon:<FaUserCog/>
        }
    ]
    return (
        <div className="container">
        <div style={{width: isOpen ? "300px" : "50px"}} className="sidebar">
            <div className="top_section">
                <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Hyperial</h1>
                <div style={{marginLeft: isOpen ? "20px" : "0px"}} className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>

               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;