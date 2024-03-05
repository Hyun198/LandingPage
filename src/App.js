import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contacts from './components/Contacts'


function App() {
  return (
    <main>
      <NavBar />
      <Home />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}

export default App;
