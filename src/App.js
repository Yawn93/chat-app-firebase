import Login from './Login.jsx';
import Register from './Register.jsx';
import Home from './Home.jsx';
import "./style.scss";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './AuthContext.js';

function App() {

  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) =>{
    if(!currentUser) {
      return <Navigate to="/login"/>
    }

    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;