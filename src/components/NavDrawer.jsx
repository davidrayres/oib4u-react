import {useState} from 'react'
import {useNavigate, useLocation, Link} from 'react-router-dom'

import {FaHouse, FaCalendar, FaPeopleGroup, FaChartPie, FaCircleUser} from 'react-icons/fa6'
import {IoPersonCircleOutline} from 'react-icons/io5'
import {MdCurrencyExchange} from 'react-icons/md'

import {IoMenuOutline, IoEllipsisHorizontalSharp} from 'react-icons/io5'
import {Box, Drawer} from '@mui/material'
import NavDrawer from './NavDrawer'

function Header({text}) {
  const [open, setOpen] = useState(false)

  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = route => {
    if (route === location.pathname) {
      return true
    }
  }

  const toggleDrawer = newOpen => () => {
    setOpen(newOpen)
  }

  const userNav = (
    <>
      <div className='navbarListItem' onClick={() => navigate('/')}>
        <FaHouse className='header-icon' fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} />
        <div className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Home</div>
      </div>

      <div className='navbarListItem' onClick={() => navigate('/rentals')}>
        <FaCalendar className='header-icon' fill={pathMatchRoute('/rentals') ? '#2c2c2c' : '#8f8f8f'} />
        <div className={pathMatchRoute('/rentals') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Rentals</div>
      </div>

      <div className='navbarListItem' onClick={() => navigate('/transactions')}>
        <MdCurrencyExchange className='header-icon' fill={pathMatchRoute('/transactions') ? '#2c2c2c' : '#8f8f8f'} />
        <div className={pathMatchRoute('/transactions') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Transactions</div>
      </div>

      <div className='navbarListItem' onClick={() => navigate('/charts')}>
        <FaChartPie className='header-icon' fill={pathMatchRoute('/charts') ? '#2c2c2c' : '#8f8f8f'} />
        <div className={pathMatchRoute('/charts') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Charts</div>
      </div>

      <div className='navbarListItem' onClick={() => navigate('/renters')}>
        <FaPeopleGroup className='header-icon' fill={pathMatchRoute('/renters') ? '#2c2c2c' : '#8f8f8f'} />
        <div className={pathMatchRoute('/renters') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Renters</div>
      </div>

      <div className='navbarListItem' onClick={() => navigate('/profile')}>
        <FaCircleUser className='header-icon' fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'} />
        <div className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Profile</div>
      </div>
    </>
  )

  return (
    <>
      <IoMenuOutline onClick={toggleDrawer(true)}>Open drawer</IoMenuOutline>

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{width: 250}} role='presentation' onClick={toggleDrawer(false)}>
          <div className='navbarListItem' onClick={() => navigate('/')}>
            <FaHouse className='header-icon' fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'} />
            <div className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Home</div>
          </div>

          <div className='navbarListItem' onClick={() => navigate('/rentals')}>
            <FaCalendar className='header-icon' fill={pathMatchRoute('/rentals') ? '#2c2c2c' : '#8f8f8f'} />
            <div className={pathMatchRoute('/rentals') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Rentals</div>
          </div>

          <div className='navbarListItem' onClick={() => navigate('/transactions')}>
            <MdCurrencyExchange className='header-icon' fill={pathMatchRoute('/transactions') ? '#2c2c2c' : '#8f8f8f'} />
            <div className={pathMatchRoute('/transactions') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Transactions</div>
          </div>

          <div className='navbarListItem' onClick={() => navigate('/charts')}>
            <FaChartPie className='header-icon' fill={pathMatchRoute('/charts') ? '#2c2c2c' : '#8f8f8f'} />
            <div className={pathMatchRoute('/charts') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Charts</div>
          </div>

          <div className='navbarListItem' onClick={() => navigate('/renters')}>
            <FaPeopleGroup className='header-icon' fill={pathMatchRoute('/renters') ? '#2c2c2c' : '#8f8f8f'} />
            <div className={pathMatchRoute('/renters') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Renters</div>
          </div>

          <div className='navbarListItem' onClick={() => navigate('/profile')}>
            <FaCircleUser className='header-icon' fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'} />
            <div className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'navbarListItemName'}>Profile</div>
          </div>
        </Box>
      </Drawer>

      <div>{text}</div>
      <div style={{display: 'flex', gap: '1rem'}}>
        <Link to='/profile'>
          <IoPersonCircleOutline />
        </Link>
        <Link to='/'>
          <IoEllipsisHorizontalSharp />
        </Link>
      </div>
    </>
  )
}

export default Header
