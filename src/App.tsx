import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Header from './container/Header';
import Login from './container/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
