import { createSelector } from 'reselect'
export const getTodos = state => state.todos.data;
export const getTodosLoading = state => state.todos.isLoading;

// Example of using createSelector with multiple selectors

// export const getIncompleteTodos = createSelector(
//     getTodos,//first arugment of final function
//     getTodosLoading, // second argument of final function
//     (todos,isLoading) => isLoading? 
//     []:
//     todos.filter(todo =>!todo.isCompleted),
// );

//Higher order data does not konw or care of how the data is formated from 
//the base selector
export const getIncompleteTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => !todo.isCompleted),
);

export const getCompletedTodos = createSelector(
    getTodos,
    (todos) => todos.filter(todo => todo.isCompleted),
);