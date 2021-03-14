import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Counsellor from "./pages/Counsellor";
import ContactUs from "./pages/ContactUs";
import Listener from "./pages/Listener";
import Navbar from "./components/Navbar";
import TopBarAlert from "./components/TopBarAlert";
import Assignment from "./pages/Assignment";

function App() {
  return (
    <div>
      <Router>
        <TopBarAlert />
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/adminOnly" component={Admin} />
            <Route path="/assignment" component={Assignment} />
            <Route path="/counsellors" component={Counsellor} />
            <Route path="/contactUs" component={ContactUs} />
            <Route path="/listener" component={Listener} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
