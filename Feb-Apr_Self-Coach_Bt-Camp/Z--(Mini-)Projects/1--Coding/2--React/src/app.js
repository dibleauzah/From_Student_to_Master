// App.js
import React, { useState } from "react";
import "./App.css";

function Header({ toggleMenu }) {
  return (
    <header className="header">
      <h1>HEX Portal</h1>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
}

function NavBar({ isVisible }) {
  return (
    isVisible && (
      <nav className="nav-bar">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
      </nav>
    )
  );
}

function MainSection() {
  return (
    <section className="main-section">
      <h2>Welcome to the Higher-Ed-X (HEX) Portal</h2>
      <p>Your gateway to streamlined college admissions and student support.</p>
      <div className="login-section">
        <button>Student Login</button>
        <button>College/HS Official Login</button>
      </div>
    </section>
  );
}

function App() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div className="App">
      <Header toggleMenu={toggleMenu} />
      <NavBar isVisible={menuVisible} />
      <MainSection />
    </div>
  );
}

export default App;
