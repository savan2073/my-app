import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material"
import './App.css';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App() {
  return (
    <div>
      <Navbar/>
      <div className="App">
        <Container>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/series" element={<Series/>}/>
              <Route path="/movies" element={<Movies/>}/>
              <Route path="/search" element={<Search/>}/>
            </Routes>
        </Container>
      </div>
      </div>
  );
}

export default App;
