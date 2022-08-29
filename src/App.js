import Posts from "./components/Posts";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Articles from "./Pages/Articles";
import Events from "./Pages/Events";
import Resources from "./Pages/Resources";
import Support from "./Pages/Support";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Press from "./Pages/Press";


function App() {
  return (
    <div>
      <Banner />
      <Navbar />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/press' element={<Press />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/events' element={<Events />} />
        <Route path='/resources' element={<Resources />} />
        <Route path='/support' element={<Support />} />
      </Routes>
      <Footer />

    </div>
  );
}

export default App;
