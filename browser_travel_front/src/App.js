import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import SelectCity from "./components/SelectCity";
import History from "./components/history";
import Navigationbar from "./components/navigationbar";


function App() {
  return (
    <div className="App container-fluid">
      <Router>
        <Navigationbar />
        <Routes>
          <Route exact path="/" element={<SelectCity/>} />
          <Route path="/historial" element={<History/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
