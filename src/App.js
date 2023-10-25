import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import About from './components/page/About';
import Contact from './components/page/Contact';
import Home from './components/page/Home';
import Signin from './components/page/Signin';
//import Footer from './components/Footer';
import Convert from './Convert';
import { useRef,useEffect } from 'react';
import './App.css';

function App() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');


    let mouseMoved = false;

    const pointer = {
      x: .5 * window.innerWidth,
      y: .5 * window.innerHeight,
    }
    const params = {
      pointsNumber: 40,
      widthFactor: .1,
      mouseThreshold: .6,
      spring: .4,
      friction: .5
    };

    const trail = new Array(params.pointsNumber);
    for (let i = 0; i < params.pointsNumber; i++) {
      trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
      }
    }

    window.addEventListener("click", e => {
      updateMousePosition(e.pageX, e.pageY);
    });
    window.addEventListener("mousemove", e => {
      mouseMoved = true;
      updateMousePosition(e.pageX, e.pageY);
    });
    window.addEventListener("touchmove", e => {
      mouseMoved = true;
      updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    });

    function updateMousePosition(eX, eY) {
      pointer.x = eX;
      pointer.y = eY;
    }

    setupCanvas();
    update(0);
    window.addEventListener("resize", setupCanvas);


    function update(t) {

      // for intro motion
      if (!mouseMoved) {
        pointer.x = (.5 + .3 * Math.cos(.002 * t) * (Math.sin(.005 * t))) * window.innerWidth;
        pointer.y = (.5 + .2 * (Math.cos(.005 * t)) + .1 * Math.cos(.01 * t)) * window.innerHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? .4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = .5 * (trail[i].x + trail[i + 1].x);
        const yc = .5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
      }
      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.strokeStyle = '#000000';
      window.requestAnimationFrame(update);
    }


    function setupCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }


  }, []);
  return (
    <>
    <div>
      
      <Navbar />    
      </div>
      <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/convert" element={<Convert />}/>
      </Routes>

    </div>
    <canvas ref={canvasRef}>

    </canvas>
    </>
  );
}

export default App;
