import { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar, Preloader } from "./components";
import { Home, About, Contact, Experience, Skills, Project } from "./pages";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
      <Router>
        {loading ? (
        <Preloader /> // Your Preloader component
      ) : (
        <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/*'
            element={
              <>
                <Routes>
                  <Route path='/about' element={<About />} />
                  <Route path='/experience' element={<Experience />} />
                  <Route path='/contact' element={<Contact />} />
                  <Route path='/skills' element={<Skills />} />
                  <Route path='/project' element={<Project />} />
                </Routes>
                {/* <Footer /> */}
              </>
            }
          />
        </Routes>
        </>)}
      </Router>
  );
};

export default App;