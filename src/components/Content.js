import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import {loadTodos,deleteTodo} from '../actions/todoActions';
class Content extends Component{

      render(){
     
                 return(

                 		<div className="container">  
                          <div className="btn-group btn-group-justified">
							  <a href="javascript:void(0);" onClick={() => {this.props.loadTodos()}} className="btn btn-warning">ADD_TODO</a>
							  <a href="javascript:void(0);" className="btn btn-danger">SHOW_TODO</a>
							  <a href="javascript:void(0);" onClick={() => {this.props.deleteTodo()}} className="btn btn-info">DELETE_TODO</a>
							</div>
                 		</div>

                 	);

      }


}


function mapStateToProps(state){
    return {todos:state.todos};
}
function matchDispatchToProps(dispatch){
       return {loadTodos:loadTodos,deleteTodo:deleteTodo,dispatch};
}

export default connect(mapStateToProps,matchDispatchToProps)(Content);

