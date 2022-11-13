import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection'
import HeroDivision from './components/HeroDivision'
import LandingMain from './components/LandingMain';

function App() {
  return (
    <div className="App">
     <Navbar />
     <HeroSection />
     <HeroDivision />
     <LandingMain />
    </div>
  );
}

export default App;
