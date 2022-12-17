import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Home from './Pages/Home'
import About from './Pages/About'
import Blogs from './Pages/Blogs'
import BlogMore from './Pages/BlogMore'
import Error from './Pages/Error'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:title' element={<BlogMore />} />
          <Route path='*' element={<Error />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
