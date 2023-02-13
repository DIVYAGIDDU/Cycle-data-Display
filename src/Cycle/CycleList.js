import React from 'react'

const CycleList = (props) => {
  let selectedUser=(user)=>{
props.method(user)
  }
  return (
    <div>
    <h3>User List</h3>
    <pre>{JSON.stringify(props)}</pre>
     <table className='table table-hover'>
         <thead className='bg-info text-white'>
         <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
         </tr>
         </thead>
         <tbody>
        {
          props.user.map((user)=>{
            return <tr key={user.id} onMouseOver={selectedUser.bind(this,user)}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.email}</td>
            </tr>
          })
        }
         </tbody>
     </table>
    </div>
  )
}

export default CycleList