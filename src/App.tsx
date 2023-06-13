import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = lazy(() => import('./pages/Home'));
const TemperatureSensor = lazy(() => import('./pages/TemperatureSensor'));

function App() {
  // const [count, setCount] = useState(0)

  return (
    //<Home></Home>
    /* <Button>
      Start
    </Button> */
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temperaturesensor" element={<TemperatureSensor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
