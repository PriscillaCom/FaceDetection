import React from 'react';
import './faceRecognition.scss';

const FaceRecognition = ({imageUrl, box}) => (
    <div className='center ma sizing'>
        <div className='absolute mt2'>
            <img id='inputImage' src={imageUrl} width='500px' height= 'auto'/>
            <div className='bounding-box' 
                style={{top: box.topRow, bottom: box.bottomRow, right: box.rightCol, left: box.leftCol}}></div>
        </div>
    </div>
)

export default FaceRecognition;