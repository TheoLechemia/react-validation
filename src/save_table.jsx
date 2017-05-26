	      <Table>
	       	<tbody>
	          {this.props.obs.features.map(function(obs, index){
	            return (
	            		<tr key={index}
		     					 		style= {that.props.currentIdObs === obs.properties.id_synthese? selectedStyle:null}>
										<td onClick={(e)=>that.onValidateOrDelete(obs.properties.id_synthese, e, 'red')}>
													<Glyphicon glyph='remove' style={{'color':'red', 'cursor':'pointer'}}/>
										</td>
										<td onClick={(e)=>that.onValidateOrDelete(obs.properties.id_synthese, e, 'green')}>
													<Glyphicon glyph='ok' style={{'color':'green', 'cursor':'pointer'}}/>
										</td>
										<td onClick= {()=>that.props.onZoom(obs.properties.id_synthese)} >
												<Glyphicon glyph="search" style={{'cursor':'pointer'}} />
										</td>
										<td> {obs.properties.observateur} </td>
										<td> {obs.properties.nom_vern} </td>
										<td> {obs.properties.lb_nom} </td>
								</tr>
							)
	          })}
	          </tbody>
	       </Table>