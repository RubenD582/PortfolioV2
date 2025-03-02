import { Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Navbar from './components/NavBar';
import AboutMe from './screens/AboutMe';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
    </>
  );
}

export default App;
