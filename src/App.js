import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ChooseUs from './components/ChooseUs/ChooseUs';
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
      <ChooseUs />
    </div>
  );
}

export default App;
