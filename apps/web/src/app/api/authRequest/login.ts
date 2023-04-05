import {useFecht} from '../fetchHook'
import userrequest from './userrequest'

export const useLogin = ()=>{
  return useFecht() && ((body:userrequest)=>useFecht().post(body, '/api/auth/login'))
}