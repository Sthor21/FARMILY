import React from 'react'
import './css/LoginandSignup.css'
export const LoginandSignup = () => {
  return (
    <div className='login_signup'>
      <div className="login_signup_container">
        <h1>Sign Up</h1>
        <div className="login_signup_fields">
          <input type="text" placeholder='YourName' />
          <input type="email" placeholder='Email Address'/>
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className='login_singup_login'>Already have an account ? <span> Login</span></p>
        <div className="login_signup_agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
