import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Header from './container/header';
import Login from './container/login';
import SignUpwithProfile from './container/signUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/signup" element={<SignUpwithProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
