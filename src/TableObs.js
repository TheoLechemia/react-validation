import React, { Component } from 'react';
import {Button,Table,Glyphicon } from 'react-bootstrap';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class TableObs extends Component {

	onValidateOrDelete(id, e, color){
		const that=this;
		//highlight the row before delete
		const row = e.target.parentNode.parentNode;
		row.style.backgroundColor = color;
		setTimeout(function(){
			that.props.onValidateOrDelete(id);
			row.style.backgroundColor = 'white';
		}, 150)
	}

  render() {

  const columns = [{
    Header: 'Observateur',
    accessor: 'properties.observateur',
  }, {
    Header: 'Nom vern',
    accessor: 'properties.nom_vern',
  }, {
    Header: 'Nom sc',
    accessor: 'properties.lb_nom' // Custom value accessors!
  },{
  	Header: 'Custom', // Custom header components!
    accessor: 'properties.id_synthese',
    Cell : data =>  <Glyphicon onClick= {()=>this.props.onZoom(data.value)}  glyph='search' style={{'cursor':'pointer'}}/>
  }
  ]

  	var selectedStyle = {backgroundColor:'lightgrey'}
    return(
    	<div>
			{this.props.obs?
    		  <ReactTable
            className='-striped -highlight'
            data={this.props.obs.features}
            columns={columns}
            defaultPageSize={10} />
      :null}
	     </div>
    );
  }
}


export default TableObs;
