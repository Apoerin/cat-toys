import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

// Components
const Header = React.lazy(() => import("./components/Header"));

// Pages
const Home = React.lazy(() => import("./components/Home"));
/*const Menu2 = React.lazy(() => import("./Menu2"));
<Route path="/menu2" render={props => <Menu2 {...props} />} />*/

export default function App() {
  return (
    <Router>
      <React.Suspense fallback={<p className="loader">Loading...</p>}>
        {/* ----- Header ----- */}
        <Header />
        {/* ----- Wrapper / Main ----- */}
        <section id="main">
          <Switch>
            <Route path="/home" render={props => <Home {...props} />} />

            {/* Redirect */}
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </section>
      </React.Suspense>
    </Router>
  );
}
