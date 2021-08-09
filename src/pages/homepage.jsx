import React from 'react';
import ImageLinkForm from '../components/linkForm/imageLinkForm';
import FaceRecognition from '../components/faceRecognition/faceRecognition';

import './homepage.scss';

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: '',
            imageUrl: '',
            box: []
        }
    }

    caclulateFaceLocation = (data) => {
        console.log('data',data);
        let newBox = [];
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        
        for( let i = 0; i < data.outputs[0].data.regions.length; ++i){
            const clarifaiFace = data.outputs[0].data.regions[i].region_info.bounding_box;
            newBox.push(
                {leftCol: clarifaiFace.left_col * width,
                topRow: clarifaiFace.top_row * height,
                rightCol: width - (clarifaiFace.right_col * width),
                bottomRow: height - (clarifaiFace.bottom_row * height)}
            );
        }
        return newBox;
    }
        
    displayFaceBox = (box) => {
        this.setState({box: box});
    }

    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }

    onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input});
        fetch('https://mysterious-cliffs-07634.herokuapp.com/imageurl',{
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                input: this.state.input
            })
        })
        .then(response => response.json())
        .then(response => {
            this.displayFaceBox(this.caclulateFaceLocation(response))
        })
        .catch(err => console.log(err));
    }

    render(){
        const {imageUrl, box} = this.state;
        return(
            <div className='homepage'>
                <div className='styling'>
                    <div className='center ph6 pv3 mt2'>
                        <ImageLinkForm onButtonSubmit={this.onButtonSubmit} onInputChange={this.onInputChange}/>
                    </div>
                    <FaceRecognition box={box} imageUrl={imageUrl} />
                </div> 
            </div>
        );
    }
}

export default Homepage;