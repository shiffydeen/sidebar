import React from 'react';
import { useState } from 'react';
import { useContext, createContext } from 'react';


const AppContext = createContext()


const AppProvider = ({children}) => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    return ( 
        <AppContext.Provider value={{setIsModalOpen, isModalOpen, isSidebarOpen, setIsSidebarOpen}}>
            {children}
        </AppContext.Provider>
     );
}

export const useGlobalContext = () => {
    return useContext(AppContext)
} 
 
export {AppContext, AppProvider};