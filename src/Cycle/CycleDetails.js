import React from 'react'

const CycleDetails = (props) => {
    let userData=props.data.selUser;
  return (
    <div>
    <h3>User Details</h3>
    <pre>{JSON.stringify(props.data)}</pre>
    <div className='card'>
    <div className='card-header'>
    <img src={userData.image}  height="150px" alt="" />
    </div>
    <div className='card-body'>
    <li className="list-group-item">ID : {userData.id}</li>
    <li className="list-group-item">First Name : {userData.firstName}</li>
    <li className="list-group-item">LastName : {userData.lastName}</li>
    <li className="list-group-item">Email :{userData.email}</li>
    <li className="list-group-item">Age : {userData.age}</li>
    <li className="list-group-item">Blood Group : {userData.bloodGroup}</li>
</div>
</div>
    </div>
  )
}

export default CycleDetails