import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, useParams } from 'react-router-dom';
import UserDetails from './UserDetails';
import Home from './Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<UserDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
