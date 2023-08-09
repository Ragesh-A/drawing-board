import { createContext, useState } from "react";

const Context = createContext()

const ContextProvider = ({ children }) => {

  const [color, setColor] = useState('#ffffff');
  const [brushSize, setBrushSize] = useState(1)
  const [canvasContext, setCanvasContext] = useState(null)
  const [canvasRef, setCanvasRef] = useState(null)
  
  const changeColor = (userColor) => {
    setColor(userColor)
  }

  const changeBrushSize = (size) => {
    setBrushSize(size)
  }
  return (
    <Context.Provider value={{
      color, changeColor,
      brushSize, changeBrushSize, 
      canvasContext, setCanvasContext,
      canvasRef, setCanvasRef}}>
    {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }