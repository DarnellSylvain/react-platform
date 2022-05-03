import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";

import Dashboard from "./pages/Dashboard";
import Feedback from "./pages/Feedback";

import Ingredients from "./pages/Ingredients";
import Recipes from "./pages/Recipes";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      {/* <TopNav /> */}
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
