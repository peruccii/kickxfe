import InitialHome from './InitialHome/InitialHome'
import Login from './LoginPage/Login'
import Register from './RegisterPage/Register'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
{/*import { ProtectedRoutes } from './ProtectedRoutes'*/ }

const Routess = () => {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<InitialHome />} />

        {<Route path='/login' element={
          <Login />
        } />}

        {<Route path='/register' element={
          <Register />
        } />}

      </Routes>
    </Router>
  )
}

export default Routess