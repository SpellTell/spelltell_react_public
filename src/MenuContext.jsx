import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

const MenuContext = createContext();

export function MenuPovider({children}) {
const [isOpen, setIsOpen] = useState(false);
  return (
    <MenuContext.Provider value={{isOpen, setIsOpen}}>
        {children}
    </MenuContext.Provider>
  )
}

export default MenuContext