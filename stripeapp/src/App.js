import {  Routes, Route } from 'react-router-dom';
import Pay from './pages/Pay';
import Success from './pages/Success';


function App() {
  return (
  <Routes>
    <Route>
      <Pay path="/pay"/>
    </Route>
    <Route>
      <Success path="/success"/>
    </Route>
  </Routes>
  )
}

export default App;
