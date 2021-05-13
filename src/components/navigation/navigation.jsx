import React from 'react';
import Logo from '../logo/logo';

import './navigation.scss';

const Navigation = ({onRouteChange,isSignedIn}) =>{
    console.log(isSignedIn);
    if(isSignedIn){
        return(
            <nav className='navigation'>
                <Logo/>
                <p onClick={() => onRouteChange('signout')} className='link f3 white pa2 pointer hovering'>Sign Out</p>
            </nav>
        )
    }
    else
        return(
            <nav className='navigation2'>
                <p onClick={() => onRouteChange('register')} className='link f3 white pointer pa2 hovering'>Register</p>
                <p onClick={() => onRouteChange('signin')} className='link f3 white pointer pa2 hovering'>Sign In</p>
            </nav>
        )
    
}

export default Navigation;