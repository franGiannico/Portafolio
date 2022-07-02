import "../styles/styles.scss"
import Header from "./sections/Header";
import Home from "./pages/home";
import AboutMe from "./pages/aboutMe";
import { 
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import MyWork from "./pages/myWork";


const App = () => (
  <Router>
    <Header/>
      <Routes>
        <Route path="myWork" element={<MyWork title peticion="cupcakes"/>}/>
        <Route path="aboutMe" element={<AboutMe/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
  </Router>
)
export default App;
