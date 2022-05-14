import { Route, Routes } from "react-router-dom";
import Header from "./Layout/Header";
import Collection from "./pages/Collection";
import DetailPage from "./pages/DetailPage";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction/Introduction";
import LoginPage from "./pages/LoginPage";
import JoinPage from "./pages/JoinPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/detailpage" element={<DetailPage />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/joinpage" element={<JoinPage />} />
      </Route>
    </Routes>
  );
}

export default App;
