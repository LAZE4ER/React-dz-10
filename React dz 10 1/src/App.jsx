import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />}></Route>
      </Route>
    </Routes>
  );
}
export default App;
