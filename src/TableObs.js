import React, { Component } from 'react';
import {Button,Glyphicon } from 'react-bootstrap';
import ReactTable from 'react-table'
import 'react-table/react-table.css'

class TableObs extends Component {

	constructor(){
		super();
		this.state =  {
			'loading':true,
		}
		this.stylRowfunc= this.stylRowfunc.bind(this);
	}


	onValidateOrDelete(id, e, color){
		const that=this;
		//highlight the row before delete
		const row = e.target.parentNode.parentNode;
		row.style.backgroundColor = color;
		row.classList.add()
		setTimeout(function(){
			that.props.onValidateOrDelete(id);
			row.style.backgroundColor = 'white';
		}, 150)
	}


	stylRowfunc(state, rowInfo, column, instance) {
	  if (!rowInfo) return {}
	  return{
	  	style: {
				background: rowInfo.row.id_synthese === this.props.currentIdObs ? 'lightgrey' : null
				}
	  }
	}


  render() {

  const columns = [{
  	Header: '',
  	'id':'id_synthese',
    accessor: 'properties.id_synthese',
    Cell : data =>  <Glyphicon onClick={(e)=>this.onValidateOrDelete(data.value, e, 'green')}glyph='ok' style={{'color':'green', 'cursor':'pointer'}}/>
  },
  {
  	Header: '',
  	'id':'id_synthese1',
    accessor: 'properties.id_synthese',
    Cell : data =>  <Glyphicon onClick={(e)=>this.onValidateOrDelete(data.value, e, 'red')} glyph='remove' style={{'color':'red', 'cursor':'pointer'}}/>
  },{
  	'id':'observateur',
    Header: 'Observateur',
    accessor: 'properties.observateur',
  }, {
  	'id':'nom_vern',
    Header: 'Nom vern',
    accessor: 'properties.nom_vern',
  }, {
  	'id':'lb_nom',
    Header: 'Nom sc',
    accessor: 'properties.lb_nom' // Custom value accessors!
  },{
  	'id':'id_synthese2		',
  	Header: 'Custom', // Custom header components!
    accessor: 'properties.id_synthese',
    Cell : data =>  <Glyphicon onClick= {()=>this.props.onZoom(data.value)}  glyph='search' style={{'cursor':'pointer'}}/>
  }
  ]

    return(
    		<div>
    		  {this.props.obs?<ReactTable
    		   	getTrProps = {this.stylRowfunc}
            className='-striped -highlight'
            data={this.props.obs.features}
            columns={columns}
            defaultPageSize={10}
            loading={this.props.loading}

             />
            : <h3> Loading </h3>}
	     </div>
    );
  }
}


export default TableObs;
