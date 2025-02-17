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

      <Nav />

      {/* Body */}
      <div className="mainContent">
        <Home />

        <About />

        <Work />

        <Contact />
      </div>

      {/* Footer */}

      <Footer />
    </>
  );
}

export default App;
