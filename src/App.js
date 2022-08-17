import "./App.css"
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Employee from "./employee";
import Empdetails from "./Empdetails";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Employee/>}/>
        <Route path="/empdetails/:id" element={<Empdetails/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;