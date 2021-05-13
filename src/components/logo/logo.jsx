import React from 'react';
import facelogo from './facelogo.png';
import Tilt from 'react-tilt';

const Logo = () => (
    <Tilt className='shadow-5 br-100 ba  b--white ma3'
        option={{max: 45}}>
        <div style={{padding: '15px 20px'}}>
            <img style={{paddingTop:'6px'}} alt='cartoon user' src={facelogo}/>
        </div>
    </Tilt>
)

export default Logo;