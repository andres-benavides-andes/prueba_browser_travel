import React, { Component } from "react";
import { GoogleMap, LoadScript, InfoWindow } from "@react-google-maps/api";
import { API_KEY_MAPS } from "../services/index";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const divStyle = {
  background: `white`,
};

class Map extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let position = {
      lat: parseFloat(this.props.lat),
      lng: parseFloat(this.props.lon),
    };
    let info_window = "";
    let zoom = 8;

    if (this.props.showAll===true){
      let info_windows = []
      let cities =  this.props.cities
      cities.forEach((city,index)=>{
        let pos = {
          lat: parseFloat(city.lat),
          lng: parseFloat(city.lon),
        }
        let i_window = (
          <InfoWindow position={pos} key={index.toString()}>
            <div style={divStyle}>
              <strong>Humedad de: {city.humidity}</strong>
            </div>
          </InfoWindow>
        );
        info_windows.push(i_window);

        position = {
          lat: parseFloat(city.lat),
          lng: parseFloat(city.lon),
        };
      });
      info_window = info_windows;
      zoom = 3;
    }

    if (this.props.humidity != "" && this.props.showAll===false) {
      info_window = (
        <InfoWindow position={position}>
          <div style={divStyle}>
            <strong>Humedad de: {this.props.humidity}</strong>
          </div>
        </InfoWindow>
      );
    }

    return (
      <LoadScript googleMapsApiKey={API_KEY_MAPS}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={position}
          zoom={zoom}
        >
          {info_window}
          <></>
        </GoogleMap>
      </LoadScript>
    );
  }
}

export default Map;
