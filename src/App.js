import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Counsellor from "./pages/Counsellor";
import ContactUs from "./pages/ContactUs";
import Listener from "./pages/Listener";
import Navbar from "./components/Navbar";

import Assignment from "./pages/Assignment";

function App() {
  return (
    <div>
      <Router>
        {/* <TopBarAlert /> */}

        <Navbar />

        <Switch>
          <Route path="/adminOnly" component={Admin} />
          <Route path="/assignment" component={Assignment} />
          <Route path="/counsellor" component={Counsellor} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/listener" component={Listener} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
