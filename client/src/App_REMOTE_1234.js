import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentHome from "./pages/User/usHome.jsx";
import StudentAuth from "./pages/User/usAuth.jsx";
import JmHome from "./pages/Admin/adHome.jsx";
import AdFinished from "./pages/Admin/adFinisehd.jsx";
import AdPending from "./pages/Admin/adPending.jsx";
import AdWorking from "./pages/Admin/adWorking.jsx";
import FirstPage from "./pages/User/Starting.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/shome" element={<StudentHome />} />
          <Route path="/sauth" element={<StudentAuth />} />
          <Route path="/jmhome" element={<JmHome />} />
          <Route path="/adfinished" element={<AdFinished />} />
          <Route path="/adworking" element={<AdWorking />} />
          <Route path="/adpending" element={<AdPending />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
