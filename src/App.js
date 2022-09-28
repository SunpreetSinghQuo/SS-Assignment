import logo from './logo.svg';
import './App.css';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
// import { Router, Route } from 'react-router';
import HomeScreen from './screens/homeScreen/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
