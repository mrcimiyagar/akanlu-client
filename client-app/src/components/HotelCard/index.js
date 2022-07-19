import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Rating } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function HotelCard(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card onClick={() => {
      props.onHotelSelected(props.hotel.hotelID);
    }} style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', backdropFilter: 'blur(10px)', width: 'calc(100% - 32px)', marginLeft: 16, marginRight: 16, marginTop: 16, borderRadius: 16 }}>
      <CardHeader
        title={props.hotel.hotelName}
        subheader={<div>
          <div style={{ display: 'flex' }}><Rating value={Number(props.hotel.hotelStar)} /><Typography>{props.hotel.hotelBooking} of 10</Typography></div>
          <Typography variant={'caption'} style={{fontWeight: 'bold'}}>
            {props.hotel.hotelAddress}
          </Typography>
        </div>}
      />
      <CardMedia
        component="img"
        height="194"
        image={"https://akanlu.com/WebFile/Gallery/" + props.hotel.hotellogo}
        alt="Hotel Photo"
      />
    </Card>
  );
}
