import './App.css';
import NavigationBar from './components/NavBar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tada from "react-reveal/Tada";
import ScrollToTop from "react-scroll-to-top";
// import useTheme from your context
import { useTheme } from "./context/ThemeContext";
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Techstack from "./Pages/Techstack/Techstack";
import Projects from "./Pages/Projects/Projects";
import Education from "./Pages/Educations/Education";
import WorkExp from "./Pages/workExp/WorkExp";
import Contact from "./Pages/Contact/Contact";
import Roles from "./Pages/Roles and Responsibilities/roles";
import Activities from "./Pages/Extra&CoCurricular/Extra&CoCurricular";
import Certifications from "./Pages/Certifications/certifications";
import Achievements from "./Pages/Acheivements/achievements";

function App() {
  const [theme] = useTheme();

  return (
    <>
      <div id={theme} className="app-container">
        <NavigationBar/>
        <div className="content">
          <Home />
          <About/>
          <Education/>
          <Techstack/>
          <Projects/>
          <WorkExp/>
          <Certifications/>
          <Roles/>
          <Achievements/>
          <Activities/>
          <Contact/>
        </div>
        <footer className="footer mb-3 ms-3">
          <Tada>
            <h4 className="text-center">
              Made by Rohith &copy; 2024
            </h4>
          </Tada>
        </footer>
      </div>
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;