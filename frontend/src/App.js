import Layout from "./components/Layout";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CreateSecret from "./Pages/CreateSecret";
import SingleSecret from "./Pages/SingleSecret";
import Test from "./Pages/Test";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/createSecret" element={<CreateSecret />} />
            <Route path="/secret/:id" element={<SingleSecret />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
