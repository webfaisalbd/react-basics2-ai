import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Blogs from './Pages/Blogs';
import Error from './Pages/Error';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/blogs' element={<Blogs />} ></Route>
          <Route path='/blogs/:title' element={<Blog />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
