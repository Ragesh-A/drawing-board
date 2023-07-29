import { createContext, useState } from "react";

const Context = createContext()

const ContextProvider = ({ children }) => {

  const [color, setColor] = useState('#0000ff');
  const [brushSize, setBrushSize] = useState(1)
  
  const changeColor = (userColor) => {
    setColor(userColor)
  }

  const changeBrushSize = (size) => {
    setBrushSize(size)
  }
  return (
    <Context.Provider value={{color, brushSize, changeBrushSize, changeColor}}>
    {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }