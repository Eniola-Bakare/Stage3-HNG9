import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './composition/LandingPage';
import PlaceToStay from './composition/PlaceToStay';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/place-to-stay' element={<PlaceToStay /> } /> 
     </Routes>
    </div>
  );
}

export default App;
