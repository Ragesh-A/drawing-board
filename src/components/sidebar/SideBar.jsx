import { useContext  } from 'react';
import { Context } from '../../utils/context/context';
import './style.css'

const SideBar = () => {

  const {color, changeColor} = useContext(Context)
 
  return (
    <div id='sidebar'>
      <input 
        type="color"
        value={color}
        onChange={(e)=>changeColor(e.target.value) }
      />
    </div>
  )
};

export default SideBar;