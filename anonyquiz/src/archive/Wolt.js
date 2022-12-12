import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { getRestaurantInfo } from './test';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
}));

function RestaurantForm() {
  // useState hook to store the URL entered by the user
  const [url, setUrl] = useState('');

  // handleSubmit function to send the URL to the back-end
  const handleSubmit = (e) => {
    e.preventDefault();

    getRestaurantInfo(url);
  };

  // use the Material-UI styles defined above
  const classes = useStyles();

  return (
    <form onSubmit={handleSubmit} className={classes.form}>
      <TextField
        label="Wolt restaurant URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Check availability
      </Button>
    </form>
  );
}

export default RestaurantForm;