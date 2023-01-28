import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material"
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Top100 from './Pages/Top100/Top100';
import Movies from './Pages/Movies/Movies';
import Series from './Pages/Series/Series';
import Search from './Pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <div className="App">
        <Container>
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route path="/series" element={<Series/>}/>
              <Route path="/movies" element={<Movies/>}/>
              <Route path="/top_100" element={<Top100/>}/>
              <Route path="/search" element={<Search/>}/>
            </Routes>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
