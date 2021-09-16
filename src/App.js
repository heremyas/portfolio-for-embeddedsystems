import "./App.css";
import Nav from "./components/Nav";
import About from "./pages/About";
import Intro from "./pages/Intro";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  return (
    <div className="container">
      <Nav />
      <Intro />
      <About />
      <ProjectsPage />
    </div>
  );
}

export default App;
