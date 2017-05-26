import  {Map, TileLayer } from 'react-leaflet'
import GeojsonMap from './GeojsonMap'
import React, { Component } from 'react';
import RowsList from './RowsList.js'
import TableObs from './TableObs'
import { Row, Col, Grid } from 'react-bootstrap';
import './App.css';

class App extends Component {

  constructor() {
    super()
    this.state = {
      'obs':null,
      'currentIdObs':null,
    }
  }
  componentDidMount() {
    fetch('http://localhost:5000/observation_non_valide').then((response)=>{
      return response.json();
      }).then((json)=>{
        const obs = json;
        this.setState({'obs':obs});
      })
  }
  validateOrDelete(id){
    let filter = this.state.obs.features.filter(function(obs){
      return obs.properties.id_synthese !== id;
    });
    const updateListObs = {'features': filter, 'type': 'FeaturesCollection'}
    this.setState({'obs':updateListObs})
  }

  onObsClick(id){
    this.setState({'currentIdObs':id})
  }

  zoomOnObs(id){
    this.setState({'currentIdObs':id})
  }

 render() {
  return(
    <div>
          <Col md={6} lg={6} xs={6} style={{'height':'100vh'}}>
              {this.state.obs? <TableObs
                                currentIdObs={this.state.currentIdObs}
                                obs={this.state.obs}
                                onValidateOrDelete={(id)=>this.validateOrDelete(id)}
                                onZoom={(id)=>this.zoomOnObs(id)}
                         />:null}
          </Col>
          <Col md={6} lg={6} xs={6} >
              <GeojsonMap
                obs={this.state.obs}
                currentIdObs={this.state.currentIdObs}
                onObsClick={(id)=>this.onObsClick(id)}/>
          </Col>
    </div>
    )
  }

}

export default App;
