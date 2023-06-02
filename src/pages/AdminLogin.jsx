import  { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import {useNavigate, Navigate, Link} from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'
// import { AdminContext } from '../contexts/AdminContext'

const AdminLogin = () => {

  const navigate = useNavigate()
  const { setUser } = useContext(UserContext)

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    const storedUser = localStorage.getItem('admin');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem('token');
  //   localStorage.removeItem('admin');
  //   setAdmin(null);
  // };

 const handleChange = e => {
    setFormData(preData => {
      return {
        ...preData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async e => {
    e.preventDefault()
  try {

    const res = await axios.post('http://localhost:8080/api/admin/login', formData)
    const user = res.data.token;
      setUser(user)
      localStorage.setItem('token', JSON.stringify(res.data.token))
      // localStorage.setItem('admin', JSON.stringify(admin))
    console.log(res);
    navigate('/adminPage')
    } catch (error) {
      console.error('Login error:', error)
    }
    
      
  }
  
  return (
  <div className='create-form'>
      <p className='form-text'>Admin Login</p>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="email">E-mail*</label><p className='red-text' ><Link className='error-text' to={'/register'}>Don't have an Account yet?</Link></p>
          <input type="email" name='email' className='input' id='email' value={formData.email} onChange={handleChange}/>
        </div>
        <div className='form-group'>
          <label htmlFor="password">Password*</label><p className='red-text1'></p>
          <input type="password" name='password' className='input' id='password' value={formData.password} onChange={handleChange}/>
        </div>
        <div>
          <input className='checkbox' type="checkbox" />
          <label className='text' htmlFor="checkbox">Please keep me logged in</label>
        </div>
        <button className='btn btn-primary'>Submit</button>
      </form>
    </div>
  )
}

export default AdminLogin