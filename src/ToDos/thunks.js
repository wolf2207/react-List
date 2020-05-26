import {
    createTodo,
    removeTodo,
    loadTodosInProgress,
    loadTodosSuccess,
    completeTodo,   
} from './actions';

// simpliest thunk, most thunks returh a function
// export const displayAlert = () => ()=>{
//     alert('hello');
// }; //WITHOUT PROPERTY

//BOTH OF THESE ARE SYCHRONUS BUT MOST ARE ASYCH

export const displayAlert = (text) => () => {
    alert(text);
};//WITH PROPERTY


//dispatch used to dipatch ohter redux action
//get state get current state of store
export const loadTodos = () => async (dispatch) => {
    try {
        dispatch(loadTodosInProgress());
        const response = await fetch('http://localhost:6060/todos');
        const todos = await response.json();
        dispatch(loadTodosSuccess(todos));
    }
    catch (e) {
        dispatch(displayAlert(e));
    }
}
export const completeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:6060/todos/${id}/completed`, {
            method: 'post'
        });

        const completedTodo = await response.json();
        dispatch(completeTodo(completedTodo));
    }

    catch (e) {
        dispatch(displayAlert(e));
    }

}
export const removeTodoRequest = id => async dispatch => {
    try {
        const response = await fetch(`http://localhost:6060/todos/${id}`, {
            method: 'delete'
        });

        const removedTodo = await response.json();
        dispatch(removeTodo(removedTodo));
    }

    catch (e) {
        dispatch(displayAlert(e));
    }
}

export const addToDoRequest = text => async dispatch => {
    try {
        const body = JSON.stringify({ text });
        const response = await fetch('http://localhost:6060/todos', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body,
        });
        const todo = await response.json();
        dispatch(createTodo(todo));
    }
    catch (e) {
        dispatch(displayAlert(e));
    }
}