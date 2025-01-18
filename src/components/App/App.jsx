import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="page">
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/projects" element={<Projects></Projects>}> </Route>
        <Route path="/about" element={<About></About>}> </Route>
      </Routes>

      <Footer></Footer>
    </div>
  )
}

export default App
