import Layout from "./components/Layout";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateSecret from "./Pages/CreateSecret";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createSecret" element={<CreateSecret />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
