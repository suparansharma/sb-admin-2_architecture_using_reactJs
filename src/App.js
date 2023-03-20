import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultPages from "./Pages/DefaultPages/DefaultPages";
import Error from "./Pages/Error/Error";
import Login from "./Pages/Login/Login";
import Layout from "./Components/Layout";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<DefaultPages />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Layout>
      </Router>

    </>
  );
}

export default App;
