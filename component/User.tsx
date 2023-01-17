import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';
const User = () => {
  const [page, setPage]= useState(2);
    const fetchUsers = (page:number) =>{
        return axios.get(`http://localhost:4000/users?_limit=2&_page=${page}`);
      }
    const singleUser = (id:number)=>{
      return fetch(`http://localhost:4000/users/${id}`)
    }
      const {isLoading,
        isError,
        error,
        data,
        isFetching,
        isPreviousData} = useQuery({
        queryKey: ['todos',page],
        queryFn: ()=> fetchUsers(page),
        keepPreviousData : true,
        // enabled: true
        
      });
      
      console.log("previous data",isPreviousData);
      
      
  return (
    <div>User
      <button onClick={() => setPage(page+1)}>next</button>
      {
        data?.data.map((user:any,index:number)=>{
          return(
            <h2 key={index}>{
              user.name
            }</h2>
          )
        })
      }
    </div>
  )
}

export default User