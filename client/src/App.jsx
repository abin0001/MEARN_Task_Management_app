import Dashboard from './pages/Dashboard.jsx';
import Login from './pages/Login.jsx'
import { Route, Routes, Navigate, Outlet, useLocation} from "react-router-dom"
import Tasks from './pages/Tasks.jsx';
import Trash from './pages/Trash.jsx';
import User from './pages/User.jsx'
import TaskDetails from './pages/TaskDetails.jsx';
import { Toaster } from 'sonner';

function Layout (){
  const user =""
  const location =useLocation()

  return user ? (
    <div className='w-full h-screen flex flex-col md:flex-row'>

      <div className='w-1/5 h-screen bg-white sticky top-0 hidden md:block'>

      </div>

      {/* mobileslidr bar */}

      <div className='flex-1 overflow-y-auto'>

        <div className='p-4 2xl:px-10'>
          <Outlet></Outlet>
        </div>




      </div>



    </div>

  ):(

    <Navigate to ="/log-in" staet={{from:location}} replace/>
  )

}



function App() {
  return (
    <main className='w-full min-h-screen bg-[#f3f4f6]'>
    <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Navigate to='/dashboard'/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/taks' element={<Tasks/>}/>
          <Route path='/completed/:status' element={<Tasks/>}/>
          <Route path='/in-progress/:status' element={<Tasks/>}/>
          <Route path='/todo/:status' element={<Tasks/>}/>
          <Route path='/team' element={<User/>}/>
          <Route path='/trashed' element={<Trash/>}/>
          <Route path='/task/:id' element={<TaskDetails/>}/>
        </Route>
        <Route path='/log-in' element={<Login/>}/>
    </Routes>

    <Toaster/>

    </main>
  );
}

export default App
