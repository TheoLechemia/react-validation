import React, {Component} from 'react'
import {Button} from 'react-bootstrap';


class Row extends Component {
	render(){
		return (
			<tr>
				<td><Button bsStyle="danger" bsSize="large" onClick={()=> this.props.onDelete()}> Delete</Button></td>
				<td> {this.props.lobservateur} </td>
				<td> {this.props.espece} </td>
				<td> {this.props.date} </td>
			</tr>
			)
	}
}

export default Row;