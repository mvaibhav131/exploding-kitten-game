import React from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const DisplayCardContent = ({ cardContent, cardRemaining, res, defuseCardNumber }) => (
  <Card >
    <CardContent>
      <Grid style={{fontFamily:"sans-serif "}} container>
        <Grid item xs={9}>
          <Typography style={{color: "red",padding: "10px",
            fontFamily: "Arial",fontSize:"33px"}} variant='h3'>{cardContent}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography style={{color: "green",padding: "10px",textAlign:"center",
            fontFamily: "Arial",fontSize:"21px"}} variant='h6'>Remaining Cards: {cardRemaining}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography variant='body2'>{res}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography style={{color: "teal",padding: "10px",textAlign:"center",
            fontFamily: "Arial",fontSize:"18px",marginTop:"25px",marginLeft:"-9px"}} variant='body2'>Defuse Count: {defuseCardNumber}</Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default DisplayCardContent;
