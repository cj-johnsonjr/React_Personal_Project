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

function App() {
  return (
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
        </nav>
        <main>
          <Switch>
            <Route path="/login" component={LoginPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/favorites" component={FavoritesPage} />
            <Route path="/reviews" component={ReviewsPage} />
            <Redirect to="login" />
          </Switch>
        </main>
        <footer className="text-center">this is the footer</footer>
      </>
    </Router>
  );
}

export default App;
