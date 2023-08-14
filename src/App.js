import { Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { VideoList } from "./components/VideoList";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Container disableGutters={true}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos" element={<VideoList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
