import Layout from "./components/Layout";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateSecret from "./Pages/CreateSecret";
import Stuff from "./Pages/Stuff";
import Dynamic from "./Pages/Dynamic";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/createSecret" element={<CreateSecret />} />
            <Route path="/stuff" element={<Stuff />} />
            <Route path="/stuff/:id" element={<Dynamic />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
