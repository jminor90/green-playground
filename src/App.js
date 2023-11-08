import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppContainer from './components/AppContainer';
import Homepage from './pages/Homepage';
import CMajor from './pages/CMajor'


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route index element={<Homepage />} />
          <Route path="/CMajor" element={<CMajor />} />

        </Route>
      </Routes>

      {/* <p>
          Hello World
        </p> */}

    </div>
  );
}

export default App;
