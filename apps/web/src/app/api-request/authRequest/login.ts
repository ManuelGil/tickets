import {useFecht} from '../fetchHook'
import userrequest from './userrequest'

export const useLogin = ()=>{
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useFecht() && ((body:userrequest)=>useFecht().post(body, '/api-request/auth/login'))
}
