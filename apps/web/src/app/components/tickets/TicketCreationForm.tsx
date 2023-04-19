import { Box, Button, Paper, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import { ticketStructur } from '../../states/ticketSlide';
import Title from '../Title';
import { messageStructur } from '../../states/ticketSlide';
import { useCreateTicket } from '../../api-request/ticketsRequest/createNewTicket';
import { v4 as uuidv4 } from 'uuid';
export default function TicketCreationForm() {
  const createTicket = useCreateTicket();

  const initialStateTicket = {
    application: '',
    id: '',
    creationDate: '',
    description: '',
    lastContact: '',
    messages: [],
    status: '',
    techSupport: '',
    title: '',
    user: '',
  };

  const handleChange = (event: {
    preventDefault: () => void;
    target: { name: string; value: string | [] };
  }) => {
    event.preventDefault();
    setTicketToCreate((prev) => {
      return {
        ...prev,
        [event.target.name]:
          event.target.name === 'messages'
            ? [event.target.value]
            : event.target.value,
      };
    });
  };

  const [ticketToCreate, setTicketToCreate] =
    useState<ticketStructur>(initialStateTicket);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const messageGiven: messageStructur = {
      id: uuidv4(),
      user: data.get('userName') as string,
      data: data.get('messages') as string,
    };
    const ticketToSave: ticketStructur = {
      id: uuidv4(),
      application: data.get('application') as string,
      creationDate: new Date().toUTCString(),
      description: data.get('description') as string,
      lastContact: new Date().toUTCString(),
      messages: [messageGiven],
      status: 'Open',
      techSupport: 'Not selected',
      title: data.get('ticketTitle') as string,
      user: data.get('userName') as string,
    };

    const response = await createTicket(ticketToSave).then((res) => res.json());

    /*
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
    */
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Paper elevation={0} sx={{ p: 4 }}>
        <Title>Create a Tickets</Title>
        {}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="userName"
              name="userName"
              label="User Name"
              fullWidth
              autoComplete="given-name"
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="ticketTitle"
              name="ticketTitle"
              label="Ticket Title"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="description"
              name="description"
              label="Issue Description"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="application"
              name="application"
              label="Application"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="messages"
              name="messages"
              label="Message for Tech Support"
              fullWidth
              variant="standard"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          create ticket
        </Button>
      </Paper>
    </Box>
  );
}
