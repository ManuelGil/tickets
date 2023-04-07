import { Container, Grid, Paper } from '@mui/material'
import React from 'react'
import TicketCard from '../../components/TicketCard'
import SketchContent from '../../components/structur'
import TicketCreationForm from '../../components/TicketCreationForm'

const TicketCreationConten = () => {
  return (
    <SketchContent>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <TicketCreationForm></TicketCreationForm>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </SketchContent>
  )
}

export default function TicketCreation(){
    return <TicketCreationConten/>
}