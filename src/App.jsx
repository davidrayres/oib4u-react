import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/public/Home'
import Info from './pages/public/Info'
import Rates from './pages/public/Rates'
import About from './pages/public/About'
import Contact from './pages/public/Contact'
import PrivateRoute from './components/PrivateRoute'
import Profile from './pages/public/Profile'

import Rentals from './pages/private/Rentals'
import Transactions from './pages/private/transactions/TransPage'
import Charts from './pages/private/Charts'
import Renters from './pages/private/Renters'

import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'
import ForgotPassword from './pages/auth/ForgotPassword'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/info' element={<Info />} />
          <Route path='/rates' element={<Rates />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>

          <Route path='/rentals' element={<Rentals />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/charts' element={<Charts />} />
          <Route path='/renters' element={<Renters />} />

          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
      </Router>

      <ToastContainer />
    </>
  )
}

export default App
