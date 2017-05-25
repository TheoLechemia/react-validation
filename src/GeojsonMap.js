import React, { Component } from 'react';
import  {Map, TileLayer } from 'react-leaflet'
import GeoJsonUpdatable from './GeoJsonUpdatable.js'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'



class GeojsonMap extends Component {
  constructor() {
    super();
    this.state = {
      lat: 16.26082243612444,
      lng: -61.576995849609375,
      zoom: 10,
    };
    this.dictLayers = {};
    this.onEachFeature = this.onEachFeature.bind(this);
    this.onGeojsonClick = this.onGeojsonClick.bind(this);

    delete L.Icon.Default.prototype._getIconUrl;

    L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    });
  }

  componentDidMount(){
    this.mapApi=this.refs.myMap.leafletElement;
  }

  componentDidUpdate(prevProps, prevState){
     if(prevProps.currentIdObs != this.props.currentIdObs){
      const currentLayer = this.dictLayers[this.props.currentIdObs];
      const coord = currentLayer.geometry.coordinates;
      let latLng = {'lng':coord[0], 'lat':coord[1]}
      this.mapApi.setView(latLng,12)
    }
  }

  onEachFeature(feature, layer){
    this.dictLayers[feature.properties.id_synthese]=feature;
  }

  pointToLayer(feature, latlng){
    return L.circleMarker(latlng);
  }

  onGeojsonClick(feature){
    const currentIdObs = feature.layer.feature.properties.id_synthese;
    this.props.onObsClick(currentIdObs);
  }



  render() {
    const position = [this.state.lat, this.state.lng];
    const style = {
      color: '#FF0009',
      weight: 5,
      fillColor:'#000000',
      fillOpacity:0.8
    }


    return(
        <Map ref="myMap" center={position} zoom={this.state.zoom} onClick={this.handleClick}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
          />
          {this.props.obs?<GeoJsonUpdatable
                              data={this.props.obs}
                              style={style}
                              onEachFeature={this.onEachFeature}
                              pointToLayer={this.pointToLayer}
                              onClick={this.onGeojsonClick}
                          />:null}

        </Map>
    );
  }
}

export default GeojsonMap;
