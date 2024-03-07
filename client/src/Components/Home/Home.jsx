import axios from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const Home = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://deploy-mern-api-umber.vercel.app/getusers')
      .then(response => setUsers(response.data))  
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
      <div className='w-50'>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(user =>{
              return <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.date}</td>
              </tr>
            })
          }
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Home