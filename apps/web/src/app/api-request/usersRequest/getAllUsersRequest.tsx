import {useFecht} from "../fetchHook";

const useGetAllUsers = ()=>{
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return !! useFecht() && (useFecht().get(null,'/users'))
}
