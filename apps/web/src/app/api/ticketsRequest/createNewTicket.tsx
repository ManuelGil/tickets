import { ticketStructur } from '../../states/ticketSlide';
import { useFecht } from '../fetchHook';

export const useCreateTicket = () => {
  return (
    useFecht() &&
    ((body: ticketStructur) =>{
      console.log("🚀 ~ file: createNewTicket.tsx:9 ~ useCreateTicket ~ jsonBody:",body)
      return useFecht().post(body, '/api/ticket');
    })
  );
};
