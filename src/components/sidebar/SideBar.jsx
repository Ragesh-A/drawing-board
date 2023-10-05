import { useContext } from 'react';
import { Context } from '../../utils/context/context';
import Palate from '../palate/Palate';
import './style.css';

const SideBar = () => {
	const { color, changeColor, changeBrushSize, canvasContext, canvasRef } =
		useContext(Context);

	const clearCanvas = () => {
		if (canvasContext) {
			canvasContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
		}
	};

	const downloadImage = () => {
		const imageUrl = canvasRef.current.toDataURL('image/png');
		const link = document.createElement('a');
		link.href = imageUrl;
		link.download = 'drawing.png';
		link.click();
	};

	return (
		<div id='sidebar'>
			<Palate />
			<input
				type='color'
				className='palate'
				value={color}
				onChange={(e) => changeColor(e.target.value)}
			/>

			<button onClick={(e) => changeColor('#272727')} className='mt-2 btn'>
				<img src='/icons/eraser.svg' className='icon' alt='eraser button' />
			</button>

			<button className='btn' onClick={clearCanvas}>
				<img src='/icons/clear.svg' className='icon' alt='clear canvas button' />
			</button>
			<button className='btn' onClick={downloadImage}>
				<img src='/icons/download.svg' className='icon' alt='download drawing button' />
			</button>

			<input
				type='number'
				min={1}
				max={30}
				defaultValue={2}
				onChange={(e) => changeBrushSize(e.target.value)}
				className='mt-2 btn'
			/>
		</div>
	);
};

export default SideBar;
