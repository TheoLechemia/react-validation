import React, { Component } from 'react';
import {Button,Table} from 'react-bootstrap';



class TableObs extends Component {

	onValidateOrDelete(id, e, color){
		const that=this;
		//highlight red the row before delete
		const row = e.target.parentNode.parentNode;
		row.style.backgroundColor = color;
		setTimeout(function(){
			that.props.onValidateOrDelete(id);
			row.style.backgroundColor = 'white';
		}, 150)
	}

  render() {
  	var that = this;
  	var selectedStyle = {backgroundColor:'lightgrey'}
    return(
    	<div>
	    	<h5> Liste des taxons non validés </h5>
	      <Table>
	       	<tbody>
	          {this.props.obs.features.map(function(obs, index){
	            return (
	            		<tr key={index}
		     					 		style= {that.props.currentIdObs === obs.properties.id_synthese? selectedStyle:null}>
										<td><Button bsStyle="danger" bsSize="large" onClick={(e)=>that.onValidateOrDelete(obs.properties.id_synthese, e, 'red')}> Delete</Button>
										</td>
										<td><Button bsStyle="success" bsSize="large" onClick={(e)=>that.onValidateOrDelete(obs.properties.id_synthese, e, 'green')}> Validate</Button>
										</td>
										<td> <Button
														onClick= {()=>that.props.onZoom(obs.properties.id_synthese)} >
														Zoom
													</Button>
										</td>
										<td> {obs.properties.observateur} </td>
										<td> {obs.properties.espece} </td>
										<td> {obs.properties.date} </td>
										<td> {obs.properties.id_synthese} </td>
								</tr>
							)
	          })}
	          </tbody>
	       </Table>
	     </div>
    );
  }
}


export default TableObs;
