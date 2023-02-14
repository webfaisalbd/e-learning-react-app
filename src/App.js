import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import CourseNameSlider from './components/CourseNameSlider/CourseNameSlider';
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';
import PopularCourses from './components/PopularCourses/PopularCourses';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <HeroSection />
      <CourseNameSlider />
      <AboutUs />
      <PopularCourses />
    </div>
  );
}

export default App;
