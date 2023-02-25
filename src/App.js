import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllCourses from './components/AllCourses/AllCourses';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/allCourses' element={<AllCourses />}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
