

// const dummyTodos = [
// 	{ id: 0, isDone: true,  text: 'make components' },
// 	{ id: 1, isDone: false, text: 'design actions' },
// 	{ id: 2, isDone: false, text: 'implement reducer' },
// 	{ id: 3, isDone: false, text: 'connect components' }
// ];
//
// import { List, Map } from 'immutable';
//
// const dummyTodos = List([
// 	Map({ id: 0, isDone: true,  text: 'make components' }),
// 	Map({ id: 1, isDone: false, text: 'design actions' }),
// 	Map({ id: 2, isDone: false, text: 'implement reducer' }),
// 	Map({ id: 3, isDone: false, text: 'connect components' })
// ]);


// src/app.js

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { TodoList } from './containers';
//                          ^^^^^^^^^^

const store = createStore(reducer);

render(
	<Provider store={store}>
		<TodoList />
	</Provider>,
	document.getElementById('app')
);