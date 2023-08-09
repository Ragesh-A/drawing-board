import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import './style.css';
import { Context } from '../../utils/context/context';

const Board = () => {

  const canvasRef = useRef(null);
  const [ctx, setCtx] = useState();
  const { color, brushSize, setCanvasContext, setCanvasRef } = useContext(Context);

  const draw = useCallback((e) => {
      if (ctx) {
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.lineWidth = brushSize;
        ctx.stroke();
        ctx.strokeStyle = color;
      }
    },
    [ctx, color, brushSize]
  );

  useEffect(() => {
    const canvas = canvasRef.current
    if (!ctx) {
      setCtx(canvas.getContext('2d'));
    }

    setCanvasContext(ctx)

    const startDraw = (e) => {
      ctx.beginPath();
      canvas.addEventListener('mousemove', draw);
    };

    const stopDraw = (e) => {
      canvas.removeEventListener('mousemove', draw);
    };
    
    canvas.addEventListener('mousedown', startDraw);
    canvas.addEventListener('mouseup', stopDraw);
    canvas.addEventListener('mouseout', stopDraw);

    return () => {
      canvas.removeEventListener('mousedown', startDraw);
      canvas.removeEventListener('mouseup', stopDraw);
      canvas.removeEventListener('mouseout', stopDraw);
      canvas.removeEventListener('mousemove', draw);
    };
  }, [ctx, draw, setCanvasContext]);

  useEffect(()=> {
    const resizeCanvas = () => {
      canvasRef.current.width = window.innerWidth - 32;
      canvasRef.current.height = window.innerHeight - 32;
    };

    setCanvasRef(canvasRef)

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    }
  }, [setCanvasRef])

  return (
    <>
      <canvas ref={canvasRef}></canvas>
    </>
  );
};

export default Board;
