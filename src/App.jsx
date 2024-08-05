import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './i18n';
import Header from './layout/Header';
import Home from './pages/Home';
import Explore from './pages/Explore';
import About from './pages/About';
import SignIn from './pages/SignIn'
import Footer from './layout/Footer';


function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    <Footer />
    </BrowserRouter>

  )
}

export default App
