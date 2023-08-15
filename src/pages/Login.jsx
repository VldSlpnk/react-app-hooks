import React, { useContext } from 'react'
import MyInput from '../components/UI/input/MyInput'
import MyButton from '../components/UI/button/MyButton'
import { AuthContext } from '../context'

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const login = (event) => {
    event.preventDefault()
    setIsAuth(true)
    localStorage.setItem('auth', 'true')
  }
  return (
    <div>
      <h1>LOGIN PAGE</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Enter your login" />
        <MyInput type="password" placeholder="Enter your password" />
        <MyButton>sign in</MyButton>
      </form>
    </div>
  )
}

export default Login
