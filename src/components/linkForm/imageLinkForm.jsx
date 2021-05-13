import React from 'react';

const ImageLinkForm = ({onInputChange,onButtonSubmit}) => (
    <div className='ph3'>
        <p className='f3' style={{color: "white"}}>
            {'This will detect faces in your picture. Give it a try, if you dare'}
        </p>
        <div className='center'>
            <div className='center pa4 ba b--white br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                <button className='w-30 tc dib grow f4 link ph3 pv2 white bg-orange ' type='submit' 
                    onClick={onButtonSubmit}>Detect</button>
            </div>   
        </div>
    </div>
)

export default ImageLinkForm;