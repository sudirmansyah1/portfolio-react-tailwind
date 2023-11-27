import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { Home, About, Contact, Experience } from "./pages";

const App = () => {
  return (
    // <main>
      <Router>
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
                </Routes>
                {/* <Footer /> */}
              </>
            }
          />
        </Routes>
      </Router>
    // </main>
  );
};

export default App;