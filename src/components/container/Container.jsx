import Board from '../board/Board';
import SideBar from '../sidebar/SideBar';
import './style.css';

const Container = () => {
  return (
    <div className="container">
      <SideBar />
      <Board />
    </div>
  );
};

export default Container;
