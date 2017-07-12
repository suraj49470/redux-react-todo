

export  function loadTodos(todos){
	        console.log("load todo called in ./actions/todoActions");
	         return {type : "ALL_TODO" , todos};

}

export  function deleteTodo(deletetodo){
	       console.log("delete todo called in ./actions/todoActions");
			 return {type : "DELETE_TODO" , deletetodo};	
}