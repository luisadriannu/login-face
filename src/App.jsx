import { Routes, Route } from "react-router-dom";
import { Login } from "./views/Login";
import { HomeAdmin } from "./views/HomeAdmin";
import { LoaderProvider } from "./context/LoaderContext";
import { Loader } from "./components/Loader";

function App() {
  return (
    <LoaderProvider>
      <Loader />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home-admin" element={<HomeAdmin />} />
      </Routes>
    </LoaderProvider>
  );
}

export default App;
