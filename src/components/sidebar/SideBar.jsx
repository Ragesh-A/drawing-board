import { useContext, createElement } from 'react';
import { Context } from '../../utils/context/context';
import Palate from '../palate/Palate';
import './style.css';

const SideBar = () => {
  const { color, changeColor, changeBrushSize, canvasContext, canvasRef } = useContext(Context);

  const clearCanvas = () => {
    if (canvasContext) {
      console.log(canvasContext.clearRect(0, 0, window.innerWidth, window.innerHeight));
    }
  }

  const downloadImage = () => {
    const imageUrl = canvasRef.current.toDataURL('image/png');
    const link = document.createElement('a')
    link.href = imageUrl;
    link.download = 'drawing.png';
    link.click()
  }

  return (
    <div id="sidebar">

      <Palate />
      <input
        type="color"
        className="palate"
        value={color}
        onChange={(e) => changeColor(e.target.value)}
      />

      <button onClick={(e) => changeColor('#272727')} className="mt-2" >
        erase
      </button>

      <button className='btn' onClick={clearCanvas}>
        clear
      </button>

      <button className='btn' onClick={downloadImage}>
        download
      </button>
      
      <input
        type="number"
        name=""
        id=""
        min={1}
        max={30}
        defaultValue={2}
        onChange={(e) => changeBrushSize(e.target.value)}
        className="mt-2"
      />
    </div>
  );
};

export default SideBar;
