import React from 'react'
import axios from 'axios'
import { useQuery } from 'react-query'
const fetchData = (id)=>{
    return axios.get(`http://localhost:4000/users/${id}`);
}
const fetchChannel = (channelId)=>{
    return axios.get(`http://localhost:4000/channel/${channelId}`);
}

const DependentQuery = ({id}) => {
    const {data:users} = useQuery(["user",id],()=>fetchData(id));
    const chanId = users?.data.channelId;
    const {data:channel,status,fetchStatus} = useQuery(["channel", chanId], ()=>fetchChannel(chanId), {
        enabled: !!chanId
    });
    console.log(channel);
  return (
    <div>DependentQuery</div>
  )
}

export default DependentQuery