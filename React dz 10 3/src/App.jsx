import { Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        home
      </Route>
    </Routes>
  );
}
export default App;
