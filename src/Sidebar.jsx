import React from 'react';
import logo from './logo.svg';
// import { useGlobalContext } from './Context';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';
import { useGlobalContext } from './Context';
const Sidebar = () => {
 
    const {isSidebarOpen, closeSidebar} = useGlobalContext();

  return (
   <>
   <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'} sidebar`}>
    <div className="sidebar-header">

        <img src={logo} className="logo" alt="coding addict" />
        <button className="close-btn" onClick={closeSidebar}>
            <FaTimes />
        </button>
    </div>
    <ul className="links">
        {links.map((link) => {
            const {id, url, text, icon} = link;
            return (
                <li key={id}>
                    <a href={url}>
                        <img src={icon}/>
                        {text}
                    </a>
                </li>
            )
        })}
    </ul>
    <ul className="social-icons">
        {social.map((link) => {
            const {id, url, icon} = link;
            return (
                <li key={id}>
                    <a href={url}>
                        <img src={icon} />
                    </a>
                </li>
            )
        })}
    </ul>
    <ul>

    </ul>
   </aside>
   </>
  );
};

export default Sidebar;
