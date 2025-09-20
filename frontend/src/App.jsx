import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
    </Routes>
  );
};

export default App;
