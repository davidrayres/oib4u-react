import {getAuth} from 'firebase/auth'
import {useState} from 'react'
import {useNavigate, useLocation, Link} from 'react-router-dom'
import {useAuthStatus} from '../hooks/useAuthStatus'
import {FaHouse, FaCalendar, FaPeopleGroup, FaChartSimple} from 'react-icons/fa6'
import {IoMenuOutline, IoEllipsisHorizontalSharp, IoPersonCircleOutline} from 'react-icons/io5'
import {MdOutlineFamilyRestroom, MdCurrencyExchange, MdOutlineContactSupport} from 'react-icons/md'
import {GiIsland, GiBeachBag} from 'react-icons/gi'
import {PiSignInThin} from 'react-icons/pi'
import {Box, Drawer} from '@mui/material'

function Header({text}) {
  const auth = getAuth()

  // figure out how to set admin in firebase
  // figure out how to set admin in firebase
  // figure out how to set admin in firebase
  // figure out how to set admin in firebase
  const userIsAdmin = auth.currentUser?.email === 'davidrayres@gmail.com'
  const [openL, setOpenL] = useState(false)
  const [openR, setOpenR] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const {loggedIn, checkingStatus} = useAuthStatus()

  console.log(auth.currentUser, loggedIn, checkingStatus, userIsAdmin)

  const pathMatchRoute = route => {
    if (route === location.pathname) return true
  }

  const publicPages = [
    {route: '', title: 'Welcome', icon: <FaHouse className='text-3xl' />},
    {route: 'info', title: 'Ocean Isle Beach', icon: <GiIsland className='text-3xl' />},
    {route: 'rates', title: 'Rental Rates', icon: <GiBeachBag className='text-3xl' />},
    {route: 'about', title: 'Our Story', icon: <MdOutlineFamilyRestroom className='text-3xl' />},
    {route: 'contact', title: 'Contact Us', icon: <MdOutlineContactSupport className='text-3xl' />},
    {route: 'profile', title: 'My Profile', icon: <IoPersonCircleOutline className='text-3xl' />},
  ]

  const privatePages = [
    {route: 'rentals', title: 'Rentals', icon: <FaCalendar className='text-3xl' />},
    {route: 'transactions', title: 'Transactions', icon: <MdCurrencyExchange className='text-3xl' />},
    {route: 'charts', title: 'Charts', icon: <FaChartSimple className='text-3xl' />},
    {route: 'renters', title: 'Renters', icon: <FaPeopleGroup className='text-3xl' />},
  ]

  return (
    <>
      <header className='flex justify-between pb-2 p-4 items-center text-4xl border-b border-gray-300'>
        <IoMenuOutline onClick={() => setOpenL(true)} />

        <div className='text-2xl'>{text}</div>

        <div style={{display: 'flex', gap: '1rem'}}>
          <Link to='/profile'>{auth.currentUser?.photoURL ? <img src={auth.currentUser?.photoURL} className='max-w-9 rounded-full' /> : loggedIn ? <IoPersonCircleOutline /> : <PiSignInThin />}</Link>

          {userIsAdmin && <IoEllipsisHorizontalSharp onClick={() => setOpenR(true)} />}
        </div>
      </header>

      {/* Public Drawer (Left)*/}
      <Drawer open={openL} onClose={() => setOpenL(false)}>
        <Box className='flex flex-col gap-6 p-8' sx={{width: 300}} role='presentation' onClick={() => setOpenL(false)}>
          {publicPages.map((page, index) => {
            return (
              <div key={index} className={pathMatchRoute(`/${page.route}`) ? 'navLinkActive' : 'navLink'} onClick={() => navigate(`/${page.route}`)}>
                {page.icon} {page.title}
              </div>
            )
          })}
        </Box>
      </Drawer>

      {/* Private Drawer (Right)*/}
      <Drawer anchor='right' open={openR} onClose={() => setOpenR(false)}>
        <Box className='flex flex-col gap-6 p-8' sx={{width: 300, margin: '1rem'}} role='presentation' onClick={() => setOpenR(false)}>
          {privatePages.map((page, index) => {
            return (
              <div key={index} className={pathMatchRoute(`/${page.route}`) ? 'navLinkActive' : 'navLink'} onClick={() => navigate(`/${page.route}`)}>
                {page.icon} {page.title}
              </div>
            )
          })}
        </Box>
      </Drawer>
    </>
  )
}

export default Header
