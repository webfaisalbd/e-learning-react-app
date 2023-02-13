import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import CourseNameSlider from './components/CourseNameSlider/CourseNameSlider';
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <HeroSection />
      <CourseNameSlider />
      <AboutUs />
    </div>
  );
}

export default App;
