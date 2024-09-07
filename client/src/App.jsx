

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './dashboard/layout/MainLayout';
import AdminIndex from './dashboard/pages/Administration'; // Ensure correct path and import
import ProtectDashboard from './middleware/ProtectDashboard';
import Unable from './dashboard/pages/Unable.jsx';
import ProtectRole from './middleware/ProtectRole.jsx';
import Addwriter from './dashboard/pages/Addwriter.jsx';
import Writers from './dashboard/pages/Writers.jsx';
import News from './dashboard/pages/News.jsx';
import Profile from './dashboard/pages/Profile.jsx';
import WriterIndex from './dashboard/pages/WriterIndex.jsx';
import CreateNews from './dashboard/pages/CreateNews.jsx';
import Login from './dashboard/pages/Login.jsx';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/dashboard/login' element={<Login/>} />
        <Route path='/dashboard' element={<ProtectDashboard />}>
          <Route path='' element={<MainLayout />} >  {/* Redirect to /dashboard/admin if no subpath is provided */}
            <Route path='' element={<Navigate to='/dashboard/admin'/>} />
            <Route path='unable-access' element={<Unable />} />
            <Route path='news' element={<News />} /> 
            <Route path='profile' element={<Profile />} /> 
          <Route path ='' element={<ProtectRole role = 'admin'/>}>
            <Route path='admin' element={<AdminIndex />} /> 
            <Route path='writer/add' element={<Addwriter />} /> 
            <Route path='writers' element={<Writers />} /> 
          </Route>

          <Route path ='' element={<ProtectRole role = 'writer'/>}>
            <Route path='writer' element={<WriterIndex />} /> 
            <Route path='create/news' element={<CreateNews />} /> 
          </Route>

          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
