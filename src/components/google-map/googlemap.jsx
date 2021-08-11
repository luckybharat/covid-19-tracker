import {Map, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';
class Googlemap extends React.Component{
    constructor (props){
        super(props);
    }

    render(){
        const mapStyles = {
            width: '100%',
            height: '300px',
          };
        return (
            <div>
                <Map 
                google={this.props.google}
                zoom={8}
                style={mapStyles}
                initialCenter={{ lat: 26.912434, lng: 75.787270}}/>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAUTrg046D-LD5UMhEUXc16hS5VJuHHRHo'
})(Googlemap);