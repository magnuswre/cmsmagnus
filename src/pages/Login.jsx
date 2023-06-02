import  { useState } from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'


const Login = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = e => {
    setFormData(preData => {
      return {
        ...preData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await axios.post('http://localhost:8080/api/user/login', formData)
    console.log(res);

    setFormData(initState)
    if(res){
      navigate('/')
    }
  }
  


  return (

    <div className='create-form'>
      <p className='form-text'>Please Login To Your Account</p>
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

export default Login