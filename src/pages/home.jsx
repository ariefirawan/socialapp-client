import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import { getScreams } from '../redux/actions/data.action';

import Scream from '../components/scream';
import Profile from '../components/profile';

class Home extends Component {
  componentDidMount() {
    this.props.getScreams();
  }
  render() {
    const { screams, loading } = this.props.data;
    // console.log(screams)
    let recentScreamMarkUp = !loading ? (
      screams.map((scream) => <Scream key={scream.screamId} scream={scream} />)
    ) : (
      <p>Loading..</p>
    );
    return (
      <Grid container spacing={10}>
        <Grid item sm={8} xs={12}>
          {recentScreamMarkUp}
        </Grid>
        <Grid item sm={4} xs={12}>
          <Profile />
        </Grid>
      </Grid>
    );
  }
}

const mapDispatchToProps = (state) => ({
  data: state.data,
});

export default connect(mapDispatchToProps, { getScreams })(Home);
