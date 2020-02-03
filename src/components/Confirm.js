import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List,ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export default class FormUserDetails extends Component{
    continue = e =>{
        e.preventDefault();
        this.props.nextStep();

        //PROCESS FORM
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    styles ={
        button:{margin:15}
    }
   render(){
       const {values:{firstName,lastName,email,occupation,city,bio}} = this.props;
       return(
           <MuiThemeProvider>
               <React.Fragment>
                   <AppBar title='Confirm User Details'/>
                   <List>
                       <ListItem 
                       primaryText="First Name"
                       secondaryText={firstName}
                       />
                        <ListItem 
                       primaryText="Last Name"
                       secondaryText={lastName}
                       />
                        <ListItem 
                       primaryText="Email"
                       secondaryText={email}
                       />
                        <ListItem 
                       primaryText="Occupation"
                       secondaryText={occupation}
                       />
                        <ListItem 
                       primaryText="City"
                       secondaryText={city}
                       />
                        <ListItem 
                       primaryText="Bio"
                       secondaryText={bio}
                       />
                   </List>
                   <br/>
                   <RaisedButton 
                   label='Back'
                   primary={false}
                   style={this.styles.button}
                   onClick={this.back}
                   />
                   <RaisedButton 
                   label='Confirm & Continue'
                   primary={true}
                   style={this.styles.button}
                   onClick={this.continue}
                   />
               </React.Fragment>
           </MuiThemeProvider>
       )
   }
}