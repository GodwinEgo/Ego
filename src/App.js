// importing components from react-router-dom package
import
{
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// import Home component
import Home from "./Home/Home";
// import About component
import About from "./About/About";
// import ContactUs component
import ContactUs from "./Contact/ContactUs";
import SignIn from "./SignIn/SignIn.jsx";

function App ()
{
  return (
    <BrowserRouter>
      {/* This is the alias of BrowserRouter i.e. Router */ }
      <Router>
        <Routes>

          <Route exact path="/" component={ Home } />


          <Route path="/about" component={ About } />

          <Route path="/contactUs" component={ ContactUs } />

          <Route path="/signIn" component={ SignIn } />

        </Routes>
      </Router>
    </BrowserRouter>
  );
}

export default App;
