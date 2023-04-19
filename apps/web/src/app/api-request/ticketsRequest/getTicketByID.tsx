import { useFecht } from '../fetchHook';

export const useGetTicketByID = () => {
  return (
    useFecht() && ((id: string) => useFecht().get(null, `/api/ticket/${id}`))
  );
};
