import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const DisplayCardContent = ({ cardContent, cardRemaining, res, defuseCardNumber }) => (
  <Card>
    <CardContent>
      <Grid container>
        <Grid item xs={9}>
          <Typography variant='h6'>{cardContent}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='h6'>Cards Left: {cardRemaining}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant='body2'>{res}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant='body2'>Defuse: {defuseCardNumber}</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default DisplayCardContent;
