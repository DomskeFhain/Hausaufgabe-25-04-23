import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/datum">Datum</Link>
            <Link to="/wetter">Wetter</Link>
        </nav>
    );
  }

  export default NavBar