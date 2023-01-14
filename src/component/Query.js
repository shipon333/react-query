import axios from 'axios';
import { useQueryClient, useMutation, useQuery } from 'react-query'
const addTodo = (add)=>{
    return axios.post("http://localhost:4000/users", add);
}
export const useTodoMutations = ()=>{
    const queryClient = useQueryClient();
    return useMutation(addTodo,{
        onSuccess: ()=>{
            queryClient.invalidateQueries('user');
        }
    });
}