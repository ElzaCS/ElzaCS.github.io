import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

class About extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      {/* <div className="row">
         <div className="nine columns main-col"> */}
         <Grid container spacing={3}>
            <Grid item xs={6}>
            <h2>We are the world’s 4th largest independent communications & creative agency</h2>
            <p>We’re data-driven communications mavericks, deeply rooted in technology. We pride ourselves in being brand custodians who understand the importance of your story</p>
            </Grid>
         <Grid container spacing={6}>
            <h2>WE’RE MOVING THE MARKETPLACE FORWARD</h2>
            <p>We thrive on building brands through outstanding storytelling & help you communicate with the people that matter most</p>
      </Grid>
      </Grid>
         {/* </div>
      </div> */}
   </section>
    );
  }
}

export default About;
