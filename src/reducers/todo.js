import initialTodo from './initialTodo';


export default function todos(state=initialTodo.todos,action){
                    
             switch(action.type){
                   
                   case 'ALL_TODO' :
                      console.log("ALL_TODO Called",action);
                      return action.todos;
                     

                   case 'ADD_TODO' :
                      return action.todo;

                   case 'DELETE_TODO' :
                      console.log("DELETE_TODO Called",action);
                      return action.deletetodo;
                      

                    default :
                      return state; 
             }

}