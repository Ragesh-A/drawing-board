import { useContext } from 'react';
import { Context } from '../../utils/context/context';
import './style.css'

const Palate = () => {
  const { changeColor } = useContext(Context);
  const colors = [
    '#5c5c5c',
    '#ffffff',
    '#eb134d',
    '#39ffdf',
    '#adff3a',
    '#ff8419',
    '#b61bfe',
  ];
  return colors.map((each) => (
    <div
      className="palate"
      data-color={each}
      style={{background: each}}
      key={each}
      onClick={() => changeColor(each)}
    />
  ));
};

export default Palate;
