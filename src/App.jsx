import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const Context = createContext({
  isAuthenticated: false,
  setIsAuthenticated: () => {},
  isLoading: false,
  setIsLoading: () => {},
  user:{},
  setUser:()=>{}
});

const ConextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [user,setUser] = useState({})
  const value = {
    isAuthenticated,
    setIsAuthenticated,
    isLoading,
    setIsLoading,
    user,
    setUser
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const server = "https://todobackend-aw6o.onrender.com/api/v1";

function App() {
  const {user,setUser,setIsAuthenticated,isAuthenticated} = useContext(Context)
  useEffect(() => {
    axios
      .get("https://todobackend-aw6o.onrender.com/api/v1/users/me")
      .then((res) => {
        setIsAuthenticated(true)
        setUser(res.data.user)
       
      }).catch((err)=>{
        setIsAuthenticated(false)
        setUser({})
        
      });
  }, [isAuthenticated]);

  console.log(user)
  return (
    <div>
      <ConextProvider>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Toaster />
        </Router>
      </ConextProvider>
    </div>
  );
}

export default App;
