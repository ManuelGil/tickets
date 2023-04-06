import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { rowsTickes } from '../utils/listItems';
import { Chip } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Tickes() {
  const navigate = useNavigate();

  const ticketSelected = (event: any, row: any) => {
    event.preventDefault();
    navigate(`../ticket/${row.id}`, { replace: true });
  };
  return (
    <React.Fragment>
      <Title>Recent Tickets</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Technical Support</TableCell>
            <TableCell>User</TableCell>
            <TableCell>State</TableCell>
            <TableCell align="center">More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsTickes.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.techSupport}</TableCell>
              <TableCell>{row.user}</TableCell>
              <TableCell>{`${row.state}`}</TableCell>
              <TableCell align="center">
                <Chip
                  label="more"
                  component="a"
                  href="#basic-chip"
                  color="primary"
                  variant="outlined"
                  clickable
                  onClick={(event: any) => ticketSelected(event, row)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
