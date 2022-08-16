import "./App.css";
import Companies from "./components/Companies";
import Footer from "./components/Footer";
import Founder from "./components/Founder";
import Header from "./components/Header";
import Home from "./components/Home";
import Mission from "./components/Mission";
import Social from "./components/Social";
import Vision from "./components/Vision";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Vision />;
      <Mission />
      <Social />
      <Founder />
      <Companies />
      <Footer />
    </div>
  );
}

export default App;
