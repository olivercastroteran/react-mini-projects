import { useState } from 'react';
import './App.css';
import ToggleBtn from './toggleBtn/ToggleBtn';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <div className={isDarkMode ? 'app dark' : 'app'}>
      <nav className="navbar">
        <h1>Dark Mode</h1>
        <ToggleBtn
          isOn={isDarkMode}
          clicked={() => setIsDarkMode(!isDarkMode)}
        />
      </nav>
      <main>
        <h1>Hello World</h1>
      </main>
    </div>
  );
}

export default App;
