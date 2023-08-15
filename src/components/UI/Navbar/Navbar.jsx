import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../button/MyButton'
import { AuthContext } from '../../../context'

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className="navbar">
      <MyButton onClick={logout}>log out</MyButton>
      <div className="navbar__links">
        <Link to="/about">about</Link>
        <Link to="/posts">posts</Link>
      </div>
    </div>
  )
}

export default Navbar
