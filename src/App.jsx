import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import Work from "./Work";

function App() {
  return (
    <>
      {/* Nav */}
      <nav>
        <Nav />
      </nav>

      {/* Body */}
      <div className="mainContent">
        {/*  */}
        {/* Home */}
        <Home />

        {/* About me */}
        <About />

        {/* My work */}
        <Work />

        {/* Contact */}
        <Contact />
      </div>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
