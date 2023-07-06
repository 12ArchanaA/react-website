import "./App.css";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import NewSocialWorker from "./components/NewSocialWorker";
import SocialWorkers from "./components/SocialWorkers";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
          <Route exact path="/SocialWorkers" element={<SocialWorkers />} />
          <Route exact path="/NewSocialWorker" element={<NewSocialWorker />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
