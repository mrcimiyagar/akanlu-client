import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { isDesktop } from '../../utils/Size';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    ...((isDesktop()) && {maxWidth: 450}),
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(15px)'
  },
  input: {
    marginRight: 24,
    flex: 1
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchBar(props) {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root} {...props}>
      <Typography style={{marginRight: 16, marginLeft: 16}}>
      Search Hotels
      </Typography>
      <div style={{flex: 1}} />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
}
