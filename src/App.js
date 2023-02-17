import './App.css';
import AboutUs from './components/AboutUs/AboutUs';
import ChooseUs from './components/ChooseUs/ChooseUs';
import CourseNameSlider from './components/CourseNameSlider/CourseNameSlider';
import Features from './components/Features/Features';
import FreeCourses from './components/FreeCourses/FreeCourses';
import HeroSection from './components/HeroSection/HeroSection';
import NavBar from './components/NavBar/NavBar';
import Newsletter from './components/Newsletter/Newsletter';
import PopularCourses from './components/PopularCourses/PopularCourses';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <HeroSection />
      <CourseNameSlider />
      <AboutUs />
      <PopularCourses />
      <ChooseUs />
      <Features />
      <FreeCourses />
      <Testimonial />
      <Newsletter />
    </div>
  );
}

export default App;
