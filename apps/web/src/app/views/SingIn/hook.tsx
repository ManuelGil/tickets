import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, userSketch } from '../../states/userSlide';
import { useLogin } from '../../api/authRequest/login';
import userresquest from '../../api/authRequest/userrequest';
import { useNavigate } from "react-router-dom";

const useSingIn = () => {
  const [shouldAlertBeVisible, setAlert] =  useState('none')
  const navigate = useNavigate();
  const sumitLogin = useLogin();
  const dispach = useDispatch();

  const triggerAlert= ()=>{
    shouldAlertBeVisible == 'none' ? setAlert('auto'):setAlert('none')
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const user: userresquest = {
      username: data.get('email') as string,
      password: data.get('password') as string,
    };
    const response = await sumitLogin(user)
    .then((res) => res.json())
    .then(res => res['token'])
    .catch(err => triggerAlert());
    if(response){
      const userFetched: userSketch = {
        username: data.get('email') as string,
        token: response,
      };
      dispach(login(userFetched));
      navigate("/dashboard");
    }else{
      triggerAlert()
    }
  };

  return {
    handleSubmit,
    shouldAlertBeVisible,
    triggerAlert
  };
};

export default useSingIn;
