import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import {setDoc, doc, serverTimestamp} from 'firebase/firestore'
import {db} from '../../firebase.config'
import OAuth from '../../components/OAuth'
import visibilityIcon from '../../assets/svg/visibilityIcon.svg'
import Header from '../../components/Header'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    password: '',
  })
  const {name, address, email, password} = formData

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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      updateProfile(auth.currentUser, {
        displayName: name,
      })

      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, 'users', user.uid), formDataCopy)

      navigate('/')
    } catch (error) {
      toast.error('Something went wrong with registration')
    }
  }

  return (
    <>
      <div>
        <Header text={'Sign Up'} />

        <form className='flex flex-col gap-8 mt-8' onSubmit={onSubmit}>
          <input type='text' placeholder='Name' id='name' value={name} onChange={onChange} />

          <input type='text' placeholder='Address' id='address' value={address} onChange={onChange} />

          <input type='email' placeholder='Email' id='email' value={email} onChange={onChange} />

          <div className='passwordInputDiv'>
            <input type={showPassword ? 'text' : 'password'} placeholder='Password' id='password' value={password} onChange={onChange} />

            <img src={visibilityIcon} alt='show password' className='absolute' onClick={() => setShowPassword(prevState => !prevState)} />
          </div>

          <div className='signUpBar'>
            <button className='signUpButton'>Sign Up</button>
          </div>

          <Link to='/forgot-password' className='forgotPasswordLink'>
            Forgot Password
          </Link>
        </form>

        <OAuth />

        <Link to='/sign-in' className='registerLink'>
          Sign In Instead
        </Link>
      </div>
    </>
  )
}

export default SignUp
