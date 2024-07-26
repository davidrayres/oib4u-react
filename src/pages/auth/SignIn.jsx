import {useState} from 'react'
import {toast} from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import OAuth from '../../components/OAuth'
import visibilityIcon from '../../assets/svg/visibilityIcon.svg'
import Header from '../../components/Header'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const {email, password} = formData

  const navigate = useNavigate()

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }

  const onSubmit = async e => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      if (userCredential.user) {
        navigate('/')
      }
    } catch (error) {
      toast.error('Invalid User Credentials')
    }
  }

  return (
    <>
      <div>
        <Header text={'Sign In!'} />

        <form onSubmit={onSubmit}>
          <input type='email' placeholder='Email' id='email' value={email} onChange={onChange} />

          <div className='passwordInputDiv'>
            <input type={showPassword ? 'text' : 'password'} placeholder='Password' id='password' value={password} onChange={onChange} />

            <img src={visibilityIcon} alt='show password' className='showPassword' onClick={() => setShowPassword(prevState => !prevState)} />
          </div>

          <button className='signInButton'> Sign In</button>

          <Link to='/forgot-password' className='forgotPasswordLink'>
            Forgot Password
          </Link>
        </form>

        <OAuth />

        <Link to='/sign-up' className='registerLink'>
          Sign Up Instead
        </Link>
      </div>
    </>
  )
}

export default SignIn
