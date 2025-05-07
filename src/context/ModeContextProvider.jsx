import React, { useState,useEffect } from 'react'
import ModeContext from './ModeContext'
function ModeContextProvider({children}) {
    const [mode,setMode]=useState('dark');
    useEffect(() => {
        let htmlTag=document.querySelector('html');
        htmlTag.classList.remove('dark','light');
        htmlTag.classList.add(mode);
    }, [mode]);
    return (
        <ModeContext.Provider value={{mode,setMode}}>
            {children}
        </ModeContext.Provider>
    )
}

export default ModeContextProvider
