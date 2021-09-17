import "./App.css";
import Nav from "./components/Nav";
import About from "./pages/About";
import Certs from "./pages/Certs";
import Education from "./pages/Education";
import Intro from "./pages/Intro";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="container">
      <Nav />
      <Intro />
      <About />
      {/* <ProjectsPage /> */}
      <Education />
      <Certs />
    </div>
  );
}

export default App;
