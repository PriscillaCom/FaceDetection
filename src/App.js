import React from 'react';

import Particles from 'react-particles-js';
import Homepage from './pages/homepage';
import SignIn from './pages/signin/signinPage'
import Register from './pages/register/register';
import Navigation from './components/navigation/navigation';
import {particlesOptions} from './particles';

import './App.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      route: 'signin',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  newUser = (user_data) => {
    this.setState({user_data: {
        id: user_data.id,
        name: user_data.name,
        email: user_data.email,
        entries: user_data.entries,
        joined: user_data.joined
    }});
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route==='home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render(){
    const {isSignedIn,route} = this.state;
    return(
      <div>
        <Particles className='particles' params={particlesOptions} />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>   
        {
          route === 'home'
          ?  <Homepage userId = {this.state.user} />
          : (
              route === 'signin'
              ? <SignIn newUser={this.newUser} onRouteChange={this.onRouteChange}/>
              : <Register newUser={this.newUser} onRouteChange={this.onRouteChange}/>
          )
        }
      </div>
    )
  }
  
}
export default App;
