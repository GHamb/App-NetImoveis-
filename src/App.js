
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';
import LandHeader from './Components/LandHeader';
import Services from './Components/Services';


function App() {
  return (
    
    <div className="App">
      <LandHeader/>
      <Home/>
      <About/>
      <Services />
      <Contact/>
     
      
    </div>
  );
}

export default App;
