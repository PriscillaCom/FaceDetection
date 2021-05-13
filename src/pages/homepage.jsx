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
            box: {}
        }
    }

    caclulateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number(image.height);
        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - (clarifaiFace.right_col * width),
            bottomRow: height - (clarifaiFace.bottom_row * height)
        }
    }
    displayFaceBox = (box) => {
        console.log(box);
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