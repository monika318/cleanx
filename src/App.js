// import { keyboardImplementationWrapper } from '@testing-library/user-event/dist/keyboard';
import './App.css';
import About from './components/About';
import Featured from './components/Featured';
import Hero from './components/Hero';
import Hire from './components/Hire';
import Navbar from './components/Navbar';
import Project from './components/Project';
import Swiper from './components/Swiper';
// import StickyHeader from './components/StickyHeader';
import TopHeader from './components/TopHeader';
import Contact from './components/Contact';


function App() {
  return (
    <>
      {/* <StickyHeader /> */}
      <TopHeader />
      <Navbar />
      <Hero />
      <Swiper />
      {/* <Featured /> */}
      <About />
      <Project />
      <Hire />

      <Contact />
    </>
  );
}

export default App;
