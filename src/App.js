
import './App.scss';
import Nav from './Components/Nav/Nav';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './Pages/Home';
import Videoupload from './Pages/VideoUpload/VideoUpload';


function App() {
  
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Navigate to="/videos/84e96018-4022-434e-80bf-000ce4cd12b8"/>} />
        <Route path='/upload' element = {<Videoupload/>}/>
        <Route path='/videos/:videoId' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
