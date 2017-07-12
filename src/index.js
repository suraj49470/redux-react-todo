import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import  configureStore  from './store/configureStore';
import * as TodoActions from './actions/todoActions';
import registerServiceWorker from './registerServiceWorker';
       let todo = [
                      {"text" : "First Element", "completed" : false},
                      {"text" : "Second Element", "completed" : false},
                      {"text" : "Third Element", "completed" : false},
                      {"text" : "Fourth Element", "completed" : false},
                      {"text" : "Fifth Element", "completed" : false}
                 ];
      let deletetodo = {"todo" : {"text":"delete element","completed":true}};

const store = configureStore();
store.dispatch(TodoActions.loadTodos(todo));
//store.dispatch(TodoActions.deleteTodo(deletetodo));



ReactDOM.render(
	<Provider store={store}>
	<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();
