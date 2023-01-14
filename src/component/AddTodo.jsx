import axios from 'axios';
import React, { useState } from 'react'
import { useQuery } from 'react-query';
import {useTodoMutations} from './Query';
const AddTodo = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    // console.log(name);
    // console.log(email)
    const {mutate} = useTodoMutations();
    const handelSubmit = (e)=>{
      e.preventDefault()
      const addtodo = {name, email};
      mutate(addtodo);
      console.log("click");
    }
    const fetchUsers = () =>{
      return axios.get("http://localhost:4000/users");
    }
  const {data} = useQuery('user',fetchUsers);
  
  return (
    <div>
        <form action="">
            <input type="text" onChange={(e)=>setName(e.target.value)} />
            <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
            <button type='submit' onClick={handelSubmit}>Add Todo</button>
        </form>
        <h2>uses</h2>
        {
          data?.data.map((user)=>{
            return (
              <p key={user.id}>{user.name}</p>
            )
          })
        }
    </div>
  )
}

export default AddTodo