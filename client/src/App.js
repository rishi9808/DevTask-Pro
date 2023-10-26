import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  StudentHome  from './pages/User/usHome.jsx';
import  StudentAuth  from './pages/User/usAuth.jsx';
import JmHome from './pages/Admin/adHome.jsx';
import JmAuth from './pages/Admin/adAuth.jsx';
import JmPostJob from './pages/Admin/adNewTask.jsx';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/shome" element={<StudentHome />} />
          <Route path="/sauth" element={<StudentAuth />} />
          <Route path="/jmhome" element={<JmHome />} />
          <Route path="/jmauth" element={<JmAuth />} />
          <Route path="/jmPostJob/:pj_id" element={<JmPostJob />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
