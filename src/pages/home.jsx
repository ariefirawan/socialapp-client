import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

import Scream from '../components/scream';

class Home extends Component {
  state = {
    screams: null,
  };
  componentDidMount() {
    axios
      ('/screams')
      .then((res) => {
        this.setState({ screams: res.data });
      })
      .catch((err) => console.log(err));
  }
  render() {
    let recentScreamMarkUp = this.state.screams ? (
      this.state.screams.map((scream) => (
        <Scream key={scream.screamId} scream={scream} />
      ))
    ) : (
      <p>Loading..</p>
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {recentScreamMarkUp}
        </Grid>
        <Grid item sm={4} xs={12}>
          <p>Profile.</p>
        </Grid>
      </Grid>
    );
  }
}

export default Home;
