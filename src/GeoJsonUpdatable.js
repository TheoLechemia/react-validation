import React from "react";
import {GeoJSON}  from "react-leaflet";

class GeoJsonUpdatable extends GeoJSON{
    componentWillReceiveProps(prevProps) {
        if (prevProps.data !== this.props.data) {
            console.log(this.leafletElement);
            this.leafletElement.clearLayers();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.leafletElement.addData(this.props.data);
        }
    }
}

export default GeoJsonUpdatable;