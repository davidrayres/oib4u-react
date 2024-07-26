import {useState} from 'react'
import {Link} from 'react-router-dom'
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import {toast} from 'react-toastify'
import Header from '../../components/Header'

function ForgotPassword() {
  const [email, setEmail] = useState('')

  const onChange = e => setEmail(e.target.value)

  const onSubmit = async e => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent')
    } catch (error) {
      toast.error('Could not send reset email')
    }
  }

  return (
    <>
      <Header text={'Forgot Password'} />

      <main>
        <form onSubmit={onSubmit}>
          <input type='email' placeholder='Email' id='email' value={email} onChange={onChange} />
          <Link className='forgotPasswordLink' to='/sign-in'>
            Sign In
          </Link>

          <div className='signInBar'>
            <div className='signInText'>Send Reset Link</div>
            <button className='signInButton'>BUTTON</button>
          </div>
        </form>
      </main>
    </>
  )
}

export default ForgotPassword
