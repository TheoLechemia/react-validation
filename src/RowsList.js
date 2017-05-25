import React, {Component} from 'react'
import Row from './row.js'

class RowsList extends Component{

  render() {
  	var that = this;
    return(
      <table>
       	<tbody>
          {this.props.obs.map(function(observ){
            return <Row
            			    id={observ.properties.id}
                      lobservateur={observ.properties.observateur}
                      espece={observ.properties.lb_nom}
                      date={observ.properties.date}
                      onDelete={()=>that.props.onDelete(observ.properties.id_synthese)}
                      />

          })}
          </tbody>
       </table>
    );
  }
}

export default RowsList;