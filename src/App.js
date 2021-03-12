import { Provider } from "react-redux";
import {
  NavLink,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
import FavoritesPage from "./Components/Favorites/FavoritesPage";
import LoginPage from "./Components/Login/LoginPage";
import ReviewsPage from "./Components/Reviews/ReviewsPage";
import SearchPage from "./Components/Search/SearchPage";
import PersonalPage from "./Components/Personal/PersonalPage";
import SignUpPage from "./Components/SignUp/SignUpPage";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <>
          <nav className="menu">
            <NavLink
              className="text-center link"
              activeClassName="active-link"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className="text-center link"
              activeClassName="active-link"
              to="/search"
            >
              Search
            </NavLink>
            <NavLink
              className="text-center link"
              activeClassName="active-link"
              to="/favorites"
            >
              Favorites
            </NavLink>
            <NavLink
              className="text-center link"
              activeClassName="active-link"
              to="/reviews"
            >
              Reviews
            </NavLink>
            <NavLink
              className="text-center link"
              activeClassName="active-link"
              to="/personal"
            >
              About
            </NavLink>
          </nav>
          <main>
            <Switch>
              <Route path="/login" component={LoginPage} />
              <Route path="/signup" component={SignUpPage} />
              <Route path="/search" component={SearchPage} />
              <Route path="/favorites" component={FavoritesPage} />
              <Route path="/reviews" component={ReviewsPage} />
              <Route path="/personal" component={PersonalPage} />
              <Redirect to="login" />
            </Switch>
          </main>
        </>
      </Router>
    </Provider>
  );
}

export default App;
