import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
const Users = () => {
    const fetchUsers = ()=>{
        return axios.get("http://localhost:4000/users");
    }
    const {data} = useQuery("users",fetchUsers);
  return (
    <div>Users</div>
  )
}

export default Users