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


function App() {
  return (
    <>
      {/* <StickyHeader /> */}
      <TopHeader />
      <Navbar />
      <Hero />
      <Featured />
      <About />
      <Project />
      <Hire />
      <Swiper />
    </>
  );
}

export default App;
