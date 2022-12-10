import {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
//AIzaSyDmrrDgreL6vzpJphouhtukwaiwzCYIozo

class MapContainer extends Component {
    render() { 
        return (
            <div className='rounded-md'>
           <Map  
           google = {this.props.google}
           style = {{width: "40%", height: "85%"}}
           zoom = {10}
           initialCenter ={
            {
                lat: 6.524379,
                lng:3.379206
            }
           }
           />
           </div>
        );
        
    }
}
 
export default GoogleApiWrapper({
    apiKey:'AIzaSyDmrrDgreL6vzpJphouhtukwaiwzCYIozo'
})(MapContainer);