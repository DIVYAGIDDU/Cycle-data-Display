import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import CycleList from './CycleList';
import CycleDetails from './CycleDetails';
const Data = () => {
 let [user,setUser]=useState({})
  let [selUser,setSelUser]=useState({})
 useEffect(()=>{
  Axios.get("https://dummyjson.com/users")
  .then((resp)=>{
    setUser({user:resp.data.users})
  })
  .catch(()=>{})
 },[])
 let selectedUser=(user)=>{
   setSelUser ({selUser:user})
 }
 
  return  <>
    <h1>User App</h1>
    <pre>{JSON.stringify(user)}</pre>
    <div className='container'>
       <div className='row'>
          <div className='col-md-8'>
        {
         Object.keys(user).length>0?<>
       <CycleList user={user.user} method={selectedUser}/>
         </>:<h1>No Data found..</h1>
        }
       </div>
       <div className='col-md-4'>
       {
         Object.keys(selUser).length>0?<>
         <CycleDetails data={selUser}/>
         </>:null
       }
       </div>
       </div>
    </div>
    </>
  
}


export default Data