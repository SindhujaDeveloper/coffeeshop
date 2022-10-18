import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';
import Main from './container';
import Login from './container/login';
import SignUpwithProfile from './container/signUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<SignUpwithProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
