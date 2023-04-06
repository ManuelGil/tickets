import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
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
import { Divider } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { ticketStructur, messageStructur } from '../states/ticketSlide';
import { useParams } from 'react-router-dom';
import { singleRow } from '../utils/listItems';
import MessageList from './Messageslist';
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
    id: 0,
    date: '',
    description: '',
    application: '',
    lastContact: '',
    messages: [{id:0,data:"",user:""}],
    state: '',
    techSupport: '',
    title: '',
    user: '',
  }
  const [row, setRow] = React.useState<ticketStructur>(ticket);

  const [expanded, setExpanded] = React.useState(false);

  const { ticketId } = useParams();

  React.useEffect(() => {
    const row = singleRow(parseInt(ticketId as string));
    console.log(row)
    setRow(row);
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 'auto' }}>
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
        subheader={row.date}
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
    </Card>
  );
}
/**
 * <CardMedia
        component="img"
        height="auto"
        image="https://picsum.photos/500/300"
        alt="Paella dish"
      />



      <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and
            set aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
            over medium-high heat. Add chicken, shrimp and chorizo, and cook,
            stirring occasionally until lightly browned, 6 to 8 minutes.
            Transfer shrimp to a large plate and set aside, leaving chicken and
            chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes,
            onion, salt and pepper, and cook, stirring often until thickened and
            fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2
            cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is
            absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved
            shrimp and mussels, tucking them down into the rice, and cook again
            without stirring, until mussels have opened and rice is just tender,
            5 to 7 minutes more. (Discard any mussels that don&apos;t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then
            serve.
          </Typography>
 */
