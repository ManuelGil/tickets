import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';

const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Customers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Tickes" />
    </ListItemButton>
  </React.Fragment>
);

const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved tickets
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);


// Generate Order Data
function createData(
  id: number,
  date: string,
  title: string,
  techSupport: string,
  user: string,
  state: string,
) {
  return { id, date, title: title, techSupport: techSupport, user: user, state: state };
}


const rowsTickes = [
  createData(
      0,
      '05 Apr, 2023',
      'Printer not working',
      'John Doe',
      'Alice Smith',
      'open',
    ),
    createData(
      1,
      '04 Apr, 2023',
      'Software installation issue',
      'Mia Johnson',
      'Bob Brown',
      'in progress',
    ),
    createData(
      2,
      '03 Apr, 2023',
      'Internet connectivity problem',
      'Sara Lee',
      'David Kim',
      'open',
    ),
    createData(
      3,
      '02 Apr, 2023',
      'Server down',
      'Peter Wong',
      'Emily Chen',
      'to approve',
    ),
    createData(
      4,
      '01 Apr, 2023',
      'Database corruption',
      'Anna Garcia',
      'Kevin Rodriguez',
      'done',
    ),
    createData(
      5,
      '31 Mar, 2023',
      'Keyboard malfunction',
      'Carlos Martinez',
      'Maria Hernandez',
      'open',
    ),
    createData(
      6,
      '30 Mar, 2023',
      'Security breach',
      'Adam Johnson',
      'Sophia Nguyen',
      'open',
    ),
    createData(
      7,
      '29 Mar, 2023',
      'Power outage',
      'Karen Kim',
      'Steven Lee',
      'open',
    ),
    createData(
      8,
      '28 Mar, 2023',
      'VPN connection issue',
      'Jasmine Lee',
      'Andrew Park',
      'open',
    ),
    createData(
      9,
      '27 Mar, 2023',
      'Data loss',
      'Elena Rodriguez',
      'Daniel Garcia',
      'to approve',
    ),
    createData(
      10,
      '26 Mar, 2023',
      'Email delivery failure',
      'Mark Brown',
      'Jennifer Smith',
      'to approve',
    ),
    createData(
      11,
      '25 Mar, 2023',
      'Slow computer',
      'Nathan Davis',
      'Olivia Wilson',
      'to approve',
    ),
    createData(
      12,
      '24 Mar, 2023',
      'Printer jam',
      'Melanie Martinez',
      'William Kim',
      'to approve',
    ),
    createData(
      13,
      '23 Mar, 2023',
      'Broken screen',
      'Lucas Hernandez',
      'Victoria Nguyen',
      'to approve',
    ),
    createData(
      14,
      '22 Mar, 2023',
      'Malware infection',
      'Gabriel Perez',
      'Sophie Martin',
      'to approve',
    ),
    createData(
      15,
      '21 Mar, 2023',
      'Application crashing',
      'Julia Rodriguez',
      'Nicholas Smith',
      'to approve',
    ),
    createData(
      16,
      '20 Mar, 2023',
      'Hardware failure',
      'Jonathan Lee',
      'Isabella Davis',
      'to approve',
    ),
    createData(
      17,
      '19 Mar, 2023',
      'Website not loading',
      'Emily Kim',
      'Michael Johnson',
      'to approve',
    ),
    createData(
      18,
      '18 Mar, 2023',
      'Email account hacked',
      'Ava Brown',
      'Christopher Lee',
      'done',
    ),
    createData(
      19,
      '17 Mar, 2023',
      'Network congestion',
      'Daniel Garcia',
      'Mia Rodriguez',
      'done',
    )
    
];

export {mainListItems, secondaryListItems, rowsTickes}