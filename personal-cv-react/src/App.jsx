import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact"
import { useState } from "react";



function App() {
  const [darkMode, setDarkMode] = useState(false);

    if (darkMode) {
        document.body.classList.add("dark-mode");
    } else {
        document.body.classList.remove("dark-mode");
    }

  return (     
    <div>
    
      <h1>My Personal Online CV</h1>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <About darkMode={darkMode} setDarkMode={setDarkMode} />
      <Skills darkMode={darkMode} setDarkMode={setDarkMode} />
      <Education darkMode={darkMode} setDarkMode={setDarkMode} />
      <Contact darkMode={darkMode} setDarkMode={setDarkMode} />
       <footer>
        <p>&copy; 2026 Your Name. All rights reserved. </p>
      </footer>
    </div>
  );
}
export default App;