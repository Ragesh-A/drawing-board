import { useContext } from 'react';
import { Context } from '../../utils/context/context';
import Palate from '../palate/Palate';
import './style.css';

const SideBar = () => {
  const { color, changeColor, changeBrushSize } = useContext(Context);

  return (
    <div id="sidebar">

      <Palate />
      <input
        type="color"
        className="palate"
        value={color}
        onChange={(e) => changeColor(e.target.value)}
      />

      <button
        onClick={(e) => changeColor('#272727')}
        className="mt-2"
      >
        erase
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
