import React from 'react';
import { useGlobalContext } from './Context';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';


const Sidebar = () => {

    const {isSidebarOpen, setIsSidebarOpen} = useGlobalContext();

    return ( 
        <>
        <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className="sidebar-header">
                <img src={logo} alt='coding addict' />
                <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>
                    <FaTimes />
                </button>
            </div>
            <ul className="links">
                {links.map((link) => {
                    const {id, url, text} = link
                    return (
                        <li key={id}>
                            <a href={url}>
                                {link.icon()}{text}
                            </a>
                        </li>
                    )
                    
                })}
            </ul>
            <ul className='social-icons'>
                {social.map((link) => {
                    const {id, url} = link;
                    return (
                        <li key={id}>
                            <a href={url}>{link.icon()}</a>
                        </li>
                    )
                })}
            </ul>
        </aside>
        </>
     );
}
 
export default Sidebar;