import './App.css';
import { Routes , Route , Link } from 'react-router-dom';
import Account from './pages/Account'
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute.js';
import ManageUsers from "./pages/admin/ManageUsers.js"
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import AuthContext from './context/Auth.js'
import AddProduct from './pages/AddProduct.js';
function App() {
  const { userState, handleLogout} = useContext(AuthContext)
  const navigate = useNavigate()

  return (
  <div className="App">
      <h1>Hello react</h1>
      <nav>
      <ul>
        
        {!userState.isLoggedIn ?
        ( 
          <>
          <li><Link to='/register'>Register</Link></li>
          <li><Link to='/login'>Login</Link></li>
          </>
        ) : (
          <>
          <li><Link to='/'>Home</Link></li>
        {userState.user?.role == 'admin' && <li><Link to = '/manage-users'>Manage users</Link></li>}
        <li><Link to='/dashboard'>Dashboard</Link></li>
        {userState.user.role =='seller' && <li><Link to = '/add-product'>Add product</Link></li>}
        <li><Link to='/account'>Account</Link></li>
        <li><button onClick={() => {
          handleLogout()
          localStorage.removeItem('token')
        }}>Logout</button></li>
        </>
       
        )
        }
        
      </ul>
      </nav>

      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<PrivateRoute>
          <Dashboard />
          </PrivateRoute>} />
        <Route path='/manage-users' element= {<PrivateRoute permittedRoles = {['admin']}>
          <ManageUsers/> 
          </PrivateRoute>}></Route>
        <Route path='/account' element={<PrivateRoute>
          < Account/>
          </PrivateRoute>} />
          <Route path='/add-product' element={
            <PrivateRoute permittedRole={['seller']}>
              <AddProduct />
              </PrivateRoute>
          } />
      </Routes>
    </div>
  );
}

export default App;
