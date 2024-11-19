import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobalContext } from './Context';

const Home = () => {

  const {setIsModalOpen, setIsSidebarOpen} = useGlobalContext();

  return ( 
    <>
    <main>
      <button className="sidebar-toggle" onClick={() => setIsSidebarOpen(true)}>
        <FaBars />
      </button>
      <button className="btn" onClick={() => setIsModalOpen(true)}>
        show modal
      </button>
    </main>
    </>
   );
}
 
export default Home;