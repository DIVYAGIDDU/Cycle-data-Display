import React, { useState } from 'react'

const Fetch = () => {
  
let [user,setUser]=useState([])

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        setUser(data)
    })
  return (
    <div>
    <div className='container'>
     <dv className='card'>
       <div className='card-header'>
         {
            user.map((user)=>{
              return <tr>
   <td>{user.id}</td>
   <td>{user.name}</td>
   <td>{user.email}</td>
              </tr>
            })
         }
       </div>
     </dv>
    </div>
    </div>
  )
}

export default Fetch