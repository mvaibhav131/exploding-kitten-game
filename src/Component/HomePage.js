import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import DisplayCardContent from './DisplayCardContent';
import { startGame } from '../Actions/startGameAction';
import { flipCard } from '../Actions/flipCard';
class HomePage extends Component {
  componentWillMount() {
    this.props.startGame();
  }
  flipCard = () => this.props.flipCard();
  render() {
    const { cardFlipped, cardArray, defuseCardNumber, res } = this.props.card;
    console.log(this.props.card);
    return (
      <Grid  container direction='row' style={{ marginTop: 100 }}>
        <Grid item sm={3} />
        <Grid item xs={12} sm={6}>
          <DisplayCardContent  cardContent={cardFlipped} cardRemaining={cardArray.length} defuseCardNumber={defuseCardNumber} res={res} />
        </Grid>
        <Grid item sm={3} />
        <Grid item sm={3} />
        <Grid item xs={12} sm={6} style={{ marginTop: 30 }}>
          <Button variant='contained' color='secondary' onClick={this.flipCard}>
            Click Here To Show Your Card
          </Button>
        </Grid>
        <Grid item sm={3} />
      </Grid>
    );
  }
}

const mapStateToProps = ({ card }) => ({ card });
const mapDispatchToProps = { startGame, flipCard };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
