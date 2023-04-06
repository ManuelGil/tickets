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
import { messageStructur, ticketStructur } from '../states/ticketSlide';
import { Link, Navigate, useNavigate } from 'react-router-dom';



const mainListItems = (
  <React.Fragment>
    <ListItemButton 
    component={Link}
      to={"/dashboard"}>
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
  description: string,
  techSupport: string,
  user: string,
  state: string,
  lastContact: string,
  application: string,
  messages: messageStructur[]
) {
  return {
    id,
    date,
    title,
    description,
    techSupport,
    user: user,
    state: state,
    lastContact,
    application,
    messages,
  };
}
export const singleRow = (int: number): ticketStructur =>
  rowsTickes.filter((row) => row.id == int)[0];
const rowsTickes = [
  createData(
    1,
    '2023-04-06',
    'Problema con Configuración de Cuenta',
    'Error al Cambiar Contraseña',
    'Bob',
    'Soporte Técnico',
    'Abierto',
    '2023-04-05',
    'Aplicación Web',
    [
      { id: 0,
        user: 'Alice', data: '¡Hola! ¿En qué puedo ayudarte hoy?' },
      {
        id: 1,
        user: 'Bob',
        data: 'Hola Alice, estoy teniendo un problema con mi configuración de cuenta.',
      },
      {
        id: 2,
        user: 'Alice',
        data: 'Seguro, puedo ayudarte con eso. ¿Podrías proporcionar más detalles sobre el problema?',
      },
      {
        id: 3,
        user: 'Bob',
        data: 'Sí, cada vez que intento cambiar mi contraseña, recibo un mensaje de error.',
      },
    ]
  ),
  createData(
    2,
    '2023-04-06',
    'Problema con la Aplicación Móvil',
    'Error al Iniciar Sesión',
    'David',
    'Soporte Técnico',
    'Abierto',
    '2023-04-05',
    'Aplicación Móvil',
    [
      {
        id: 0,
        user: 'Charlie',
        data: 'Hola, estoy teniendo un problema con su aplicación móvil.',
      },
      {
        id: 1,
        user: 'David',
        data: 'Lo siento mucho por eso. ¿Podría proporcionar más detalles sobre el problema?',
      },
      {
        id: 2,
        user: 'Charlie',
        data: 'Claro, cada vez que intento iniciar sesión, recibo un mensaje de error.',
      },
      {
        id: 3,
        user: 'David',
        data: 'Gracias por informarnos. Investigaremos y nos pondremos en contacto contigo pronto.',
      },
    ]
  ),
  createData(
    3,
    '2023-04-06',
    'Problema con el Procesamiento de Pagos',
    'Error al Realizar un Pago',
    'Eve',
    'Soporte Técnico',
    'Abierto',
    '2023-04-05',
    'Aplicación Web',
    [
      {
        id: 0,
        user: 'Frank',
        data: 'Hola, estoy teniendo problemas con un pago.',
      },
      {
        id: 1,
        user: 'Eve',
        data: 'Hola Frank, lamento escuchar eso. ¿Podría proporcionar más detalles sobre el problema?',
      },
      {
        id: 2,
        user: 'Frank',
        data: 'Claro, cada vez que intento realizar un pago, recibo un mensaje de error.',
      },
      {
        id: 3,
        user: 'Eve',
        data: 'Gracias por informarnos. ¿Podría proporcionar sus detalles de cuenta para que podamos investigar?',
      },
      {
        id: 4,
        user: 'Frank',
        data: 'Por supuesto, mi ID de cuenta es 123456789.',
      },
      {
        id: 5,
        user: 'Eve',
        data: 'Gracias, investigaremos esto y nos pondremos en contacto contigo pronto.',
      },
    ]
  ),
  createData(
    4,
    '2023-04-06',
    'Problema con la Aplicación de Chat en Vivo',
    'Error al Conectar con un Agente',
    'Helen',
    'Soporte Técnico',
    'Abierto',
    '2023-04-05',
    'Aplicación Web',
    [
      {
        id: 0,
        user: 'Ivy',
        data: '¡Hola! ¿Podría conectarme con un agente de soporte técnico?',
      },
      {
        id: 1,
        user: 'Helen',
        data: '¡Hola Ivy! Lamento escuchar que tienes problemas. ¿Podrías proporcionar más detalles sobre el problema?',
      },
      {
        id: 2,
        user: 'Ivy',
        data: 'Claro, estoy tratando de conectarme con un agente de soporte técnico en su aplicación de chat en vivo, pero no puedo conectarme.',
      },
      {
        id: 3,
        user: 'Helen',
        data: 'Gracias por informarnos. ¿Podría proporcionar su número de cuenta para que podamos investigar?',
      },
      {
        id: 4,
        user: 'Ivy',
        data: 'Por supuesto, mi número de cuenta es 987654321.',
      },
      {
        id: 5,
        user: 'Helen',
        data: 'Gracias, investigaremos esto y nos pondremos en contacto contigo pronto.',
      },
    ]
  ),

  createData(
    5,
    '2023-04-06',
    'Problema con el Servicio de Soporte Técnico',
    'Tiempos de Espera Excesivamente Largos',
    'Jack',
    'Soporte Técnico',
    'Abierto',
    '2023-04-05',
    'Aplicación Web',
    [
      {
        id: 0,
        user: 'Kate',
        data: '¡Hola! ¿Podría hablar con un agente de soporte técnico?',
      },
      {
        id: 1,
        user: 'Jack',
        data: 'Hola Kate, estoy aquí para ayudarte. ¿Cuál es tu problema?',
      },
      {
        id: 2,
        user: 'Kate',
        data: 'Gracias, tengo un problema con mi cuenta y necesito hablar con un agente de soporte técnico.',
      },
      {
        id: 3,
        user: 'Jack',
        data: 'Entiendo, sin embargo, actualmente tenemos tiempos de espera excepcionalmente largos debido a una cantidad inusualmente alta de solicitudes de soporte técnico. Le pedimos disculpas por cualquier inconveniente. ¿Podría proporcionar una descripción breve del problema para que podamos investigar y abordar el problema lo antes posible?',
      },
      {
        id: 4,
        user: 'Kate',
        data: 'Por supuesto, mi cuenta parece estar bloqueada y no puedo acceder.',
      },
      {
        id: 5,
        user: 'Jack',
        data: 'Gracias por informarnos. Investigaremos esto y nos pondremos en contacto contigo tan pronto como podamos.',
      },
    ]
  ),
];

export { mainListItems, secondaryListItems, rowsTickes };
