import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
import IndexWithLoginPage from "./Pages/IndexWithLoginPage";
import IndexWithSignupPage from "./Pages/IndexWithSignupPage";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/login" element={<IndexWithLoginPage />} />
        <Route path="/signup" element={<IndexWithSignupPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
