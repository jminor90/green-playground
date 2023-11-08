import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppContainer from './components/AppContainer';
import Homepage from './pages/Homepage';
// import CMajor from './pages/CMajor'
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';

function App() {
  return (
    <div className="App">
            <div class="all-container">

      <Routes>
        <Route path="/" element={<AppContainer />}>
          <Route index element={<Homepage />} />
          {/* <Route path="/CMajor" element={<CMajor />} /> */}
          <Route path="/Page1" element={<Page1 />} />
          <Route path="/Page2" element={<Page2 />} />
          <Route path="/Page3" element={<Page3 />} />

        </Route>
      </Routes>

      {/* <p>
          Hello World
        </p> */}
</div>
    </div>
  );
}

export default App;
