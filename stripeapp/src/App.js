import {BrowserRouter,  Routes, Route } from 'react-router-dom';
import Pay from './pages/Pay';
import Success from './pages/Success';


function App() {
  return (
  <BrowserRouter>
  
  <Routes>
    <Route path="/" element={<Pay/>}/>
    <Route path="/success" element={<Success/>}/>
  </Routes>
  
  </BrowserRouter>
  );
};

export default App;
