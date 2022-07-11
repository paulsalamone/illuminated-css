import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Q001 from "./quotes/Q001";
import Q002 from "./quotes/Q002";

function App() {
  return (
    <div className="app">
      <header>
        <Link to="/">
          {" "}
          <h1 class="logo slide">Illuminated CSS</h1>
        </Link>

        <p>
          Illustrated Quotes for practicing CSS styling. RULE: no images! Pure
          CSS! Allowed: imported fonts, native SVG, animation.
        </p>
        <nav>
          <ul>
            <Link to="/quotes/Q001">quote 1</Link>
            <Link to="/quotes/Q002">quote 2</Link>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
