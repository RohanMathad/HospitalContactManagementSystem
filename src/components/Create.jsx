import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Read from './Read'


const Create = () => {

  const [name,setName] = useState("")
  const [number,setNum] = useState("")
  const [email,setEmail] = useState("")

  const history = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Clicked")
    axios.post(
     "https://6808c174942707d722df9ba9.mockapi.io/CRUD-Contact-Management-System",
     {name : name, 
      number: number, 
      email: email, 
      }
    )
    .then(() => {
      history("/read");
    })
    
  }

  return (
    <div>
      <h1>Hospital Management System</h1>
      <p>This system allows CRUD operations (Create, Read, Update, Delete) on contact data, helping users efficiently 
        manage and retrieve patient contacts in real-time.
      </p>
      <div className='d-flex justify-content-between m-2'>
      <h2>Create</h2>
      <Link  to="/read">
      <button className='btn btn-primary'>Show Data</button>
      </Link>
      </div>

    <form>
      <div className="mb-3">
      <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
      <input 
        type="text" 
        className="form-control" 
        placeholder="Enter your name"
        id="exampleInputPassword1" 
        onChange={(e)=> setName(e.target.value)}/>
      </div>

      <div className="mb-3">
      <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
      <input
        type="tel"
        onChange={(e)=> setNum(e.target.value)}
        className="form-control"
        id="phoneNumber"
        name="phoneNumber"
        placeholder="Enter your phone number"
        pattern="[0-9]{10}"
        required
      />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
        <input 
          type="email" 
          className="form-control" 
          id="exampleInputEmail1" 
          aria-describedby="emailHelp" 
          placeholder="Enter your email"
          onChange={(e)=> setEmail(e.target.value)} />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>
    
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  )
}

export default Create
