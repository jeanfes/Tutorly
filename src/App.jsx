import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { Index } from "./pages/index";
import { Iniciarsesion } from "./pages/iniciarsesion";
import { Registrarse } from "./pages/registrarse";
import { Passwordreset } from "./pages/passwordreset";
import { User } from "./pages/user";
import { Loadingscreen } from "./components/loadingscreen/loadingscreen";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <div className="App">
      {isLoading ? (
        <Loadingscreen />
      ) : (
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/iniciarsesion" element={<Iniciarsesion />} />
            <Route path="/registrarse" element={<Registrarse />} />
            <Route path="/passwordreset" element={<Passwordreset />} />
            <Route path="/user/*" element={<User />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      )}
    </div>
  );
}
export default App;
