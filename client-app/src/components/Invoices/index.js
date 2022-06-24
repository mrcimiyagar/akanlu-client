import { Avatar, Grow, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";
import EmptySign from "../../components/EmptySign";
import HotelPic from '../../images/hotel.jpg';
import Done from '@mui/icons-material/Done';
import Close from '@mui/icons-material/Close';
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "auto",
    direction: "rtl",
  },
  inline: {
    display: "inline",
  },
}));

export default function Invoices(props) {
  const classes = useStyles();
  return props.invoices.length > 0 ? (
    <List className={classes.root}>
      {props.invoices.map((invoice, index) => {
        return (
          <Grow
            in={true}
            {...{ timeout: (index + 1) * 350 }}
            transitionDuration={1000}
          >
            <div>
              <ListItem
                alignItems="flex-start"
                button
                style={{
                  marginLeft: 32,
                  marginRight: 32,
                  width: "calc(100% - 64px)",
                  height: 64,
                  backgroundColor: "rgba(255, 255, 255, 0.45)",
                  backdropFilter: "blur(10px)",
                  borderRadius:
                    (index === 0 ? "16px 16px " : "0 0 ") +
                    (index === props.invoices.length - 1 ? "16px 16px" : "0 0"),
                }}
              >
                
              <ListItemAvatar>
                <Avatar
                  src={HotelPic}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <React.Fragment style={{ position: 'relative' }}>
                    <Typography
                      noWrap
                      style={{
                        width: '100%',
                        textAlign: 'right',
                        color: '#000',
                        fontSize: 15
                      }}
                    >
                      هزینه : 3 میلیون تومان
                    </Typography>
                  </React.Fragment>
                }
                secondary={
                  <div style={{ width: '100%', position: 'relative' }}>
                    <div style={{ position: 'relative' }}>
                      <Typography style={{position: 'absolute', right: 0,
                        fontSize: 13}}>
                        1401/01/12
                      </Typography>
                      {index < 5 ?
                        <Done style={{ left: 12, position: 'absolute', fill: 'green', top: 0, width: 16, height: 16 }} /> :
                        <Close style={{ left: 12, position: 'absolute', fill: 'red', top: 0, width: 16, height: 16 }} />
                      }
                    </div>
                  </div>
                }
              />
              </ListItem>
              {props.invoices.length - 1 > index ? (
                <Divider component="li" />
              ) : null}
            </div>
          </Grow>
        );
      })}
    </List>
  ) : (
    <EmptySign />
  );
}
