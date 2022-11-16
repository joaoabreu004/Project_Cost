
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Contact from './components/pages/Contact/Contact';
import Home from './components/pages/Home';
import Company from './components/pages/Company/Company';
import NavBar from './components/layout/NavBar'
import Container from './components/layout/Container';
import Footer from './components/layout/Footer'
import Projects from './components/pages/Projetcs';
import NewProject from './components/pages/NewProject'; 



function App() {
  return (
    <div className='App'>
      <Router>
        {/* PARTE FIXA */}
        <NavBar />
        <Container customClass="min-height">
          {/* PARTE MÓVEL */}
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/company" element={<Company />}></Route>
            <Route path="/newProject" element={<NewProject/>}></Route>
          </Routes>
        </Container>
        <Footer/>
      </Router>
    </div>

  );
}

export default App;
