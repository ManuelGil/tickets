import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Divider, Paper } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { ticketStructur, messageStructur } from '../states/ticketSlide';
import { useParams } from 'react-router-dom';
import MessageList from './MessagesList';
import { useGetTicketByID } from '../api/ticketsRequest/getTicketByID';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function TicketCard() {
  const ticket: ticketStructur = {
    id: '',
    creationDate: '',
    description: '',
    application: '',
    lastContact: '',
    messages: [{id:0,data:"",user:""}],
    state: '',
    techSupport: '',
    title: '',
    user: '',
  }
  const getTicketById =  useGetTicketByID()
  const [row, setRow] = React.useState<ticketStructur>(ticket);

  const [expanded, setExpanded] = React.useState(false);

  const { ticketId } = useParams();

  const handleGetTicket = async ()=>{
    const row = await getTicketById(ticketId+"").then(res=>res.json());    
    setRow(row);
  }

  React.useEffect(() => {
    handleGetTicket()
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper elevation={0} sx={{ maxWidth: 'auto' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[300], padding: 3 }} aria-label="recipe">
            {row.techSupport.at(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={row.techSupport}
        subheader={row.creationDate}
      />

      <CardContent>
        <Typography variant="subtitle2" color="text.primary">
          Description
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {row.description}
        </Typography>
        <Divider sx={{ my: 3 }} />
        <Typography variant="subtitle2" color="text.primary">
          Status
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {row.state}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <RemoveRedEyeIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <MessageList messagesGiven={row.messages}/>
        </CardContent>
      </Collapse>
    </Paper>
  );
}

