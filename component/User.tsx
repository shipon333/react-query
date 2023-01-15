import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
const User = () => {
    const fetchUsers = () =>{
        return axios.get("http://localhost:4000/users");
      }
    const singleUser = (id:number)=>{
      return fetch(`http://localhost:4000/users/${id}`)
    }
      const {data,refetch} = useQuery({
        queryKey: ['todos'],
        queryFn: fetchUsers,
        // enabled: false
        
      });
      
      console.log("user data",data);
      
      
  return (
    <div>User
      {/* <button onClick={() => refetch()}>Fetch Todos</button> */}
    </div>
  )
}

export default User