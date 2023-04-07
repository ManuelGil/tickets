import { useFecht } from "../fetchHook"

export const useGetAllTickets = ()=>{
    return useFecht() && (()=>useFecht().get(null,'/api/ticket'))
}