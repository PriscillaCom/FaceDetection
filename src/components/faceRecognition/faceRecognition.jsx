import React from 'react';
import './faceRecognition.scss';

const FaceRecognition = ({imageUrl, box}) => (
    <div className='center ma sizing'>
        <div className='absolute mt2'>
            <img id='inputImage' src={imageUrl} width='500px' height= 'auto'/>
            {
                box.map((boxInfo,i) => {
                    const {topRow, rightCol, bottomRow, leftCol} = boxInfo;
                    return (<div key={i} className='bounding-box' 
                    style={{top: topRow, bottom: bottomRow, right: rightCol, left: leftCol}}></div>)
                })
            }
        </div>
    </div>
)

export default FaceRecognition;