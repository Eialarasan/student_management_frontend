import { Route, Routes } from 'react-router';
import './App.css';
import Login from './container/Login';
import Register from './container/Register';
import Layout from './component/Layout';
import "./asset/css/bootstrap.min.css";
import "./asset/css/style.css";
import "./asset/css/custom.css";
import Dashboard from './container/Dashboard/Dashboard';
import StudentManagement from './container/StudentManagement/StudentmanagementList';
import SkillmanagementList from './container/SkillManagement/SkillManagementList';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  
    return (
        <div>
           
                       <Routes>
                <Route path='/' element={<Login />}>
                </Route>
                <Route path='/register' element={<Register />}>
                </Route>
                <Route path='/' element={<Layout />}>
                    <Route path='/dashboard' element={<Dashboard />}/>
                    <Route path='/studentmanagement' element={<StudentManagement />} />
                    <Route path='/skillmanagement' element={<SkillmanagementList />} />
                </Route>
            </Routes>
          <ToastContainer/>
        </div>
    );
}

export default App;
