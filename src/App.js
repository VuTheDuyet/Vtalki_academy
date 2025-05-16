import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientRoutes from "./routers/ClientRoutes";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<ClientRoutes />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
