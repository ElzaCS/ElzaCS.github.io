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
        <div id="main">
            <div class="box blue"><div class="responsive-headline text i">We’re data-driven communications mavericks, deeply rooted in technology. </div></div>
            <div class="box green"><div class="responsive-headline text ii">We are the world’s 4th largest independent communications & creative agency</div></div>
            <div class="box red"><div class="responsive-headline text iii">We pride ourselves in being brand custodians who understand the importance of your story</div></div>
            <div class="box two"><div class="responsive-headline text iv">We thrive on building brands through outstanding storytelling</div></div>
            <div class="box three"><div class="responsive-headline text v">We help you communicate with the people that matter most</div></div>
        </div>
         
      </section>
    );
  }
}

export default About;
