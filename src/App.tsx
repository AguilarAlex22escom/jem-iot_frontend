import io from "socket.io-client";
import { socket } from "./constants";

// const { temperatureData, temperatureStatus, temperatureVoltage } = styles;
// const webSocket = io(socket);
io(socket);

import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./Layout/MainLayout";
const Home = lazy(() => import("./pages/Home"));
const Options = lazy(() => import("./pages/Options"));
const TemperatureSensor = lazy(() => import("./pages/TemperatureSensor"));
const PulseSensor = lazy(() => import("./pages/PulseSensor"));
const LevelSensor = lazy(() => import("./pages/LevelSensor"));

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/options" element={<Options />} />
          <Route path="/temperaturesensor" element={<TemperatureSensor />} />
          <Route path="/pulsesensor" element={<PulseSensor />} />
          <Route path="/levelsensor" element={<LevelSensor />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
