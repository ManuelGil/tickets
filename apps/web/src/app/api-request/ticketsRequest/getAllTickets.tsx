import { useFecht } from "../fetchHook"

export const useGetAllTickets = ()=>{
  // eslint-disable-next-line react-hooks/rules-of-hooks
    return useFecht() && (()=>useFecht().get(null,'/api-request/ticket'))
}
