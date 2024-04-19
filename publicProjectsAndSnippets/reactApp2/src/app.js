// App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button>Log In</button>
          <button>Sign Up</button>
        </nav>
        <section className="Profile">
          <button>Create Profile</button>
        </section>
        <section className="Campus">
          {/* Stock pictures of campus buildings */}
        </section>
        <section className="Success">
          {/* Stock pictures implying career/financial success */}
        </section>
      </header>
    </div>
  );
}

export default App;
