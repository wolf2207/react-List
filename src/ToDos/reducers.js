//function named after whatever resource it is incharge of managing
import {
    CREATE_TODO,
    REMOVE_TODO,
    COMPLETE_TODO,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_FAILURE,
} from './actions'

// No longer needed with selectors and the new inialStateValue

// export const isLoading = (state = false, action) => {
//     const { type } = action;
//     switch (type) {
//         case LOAD_TODOS_IN_PROGRESS:
//             return true;
//         case LOAD_TODOS_SUCCESS:
//         case LOAD_TODOS_FAILURE:
//             return false;
//         default:
//             return state;
//     }
// }

const initialState = {isLoading: false, data:[]};

//default state is empty array
export const todos = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {

        // using manual update

        // case CREATE_TODO: {
        //     const { text } = payload;
        //     const newTodo = {
        //         text,
        //         isCompleted: false,
        //     };
        //     //concat method when called on array does not actually mutate the state reducer should not
        //     //mutate the state in anyway
        //     return state.concat(newTodo);
        // }

        //using server
        case CREATE_TODO: {
            const { todo } = payload;
            return {
                ...state,
                data: state.data.concat(todo),
            }
        }
        // case REMOVE_TODO: {
        //     const { text } = payload;
        //     //returns all text that does not match text to remove
        //     return state.filter(todo => todo.text !== text);
        // };
        case REMOVE_TODO: {
            const { todo: todoToRemove } = payload;
            //returns all text that does not match text to remove
            return {
                ...state,
                data: state.data.filter(todo => todo.id !== todoToRemove.id),
            };
        };

        // case COMPLETE_TODO: {
        //     const { text } = payload;
        //     return state.map(todo => {

        //         if (todo.text === text) {
        //             return { ...todo, isCompleted: true }
        //         }
        //         return todo;
        //     });

        case COMPLETE_TODO: {
            const { todo: toDoCompleted } = payload;
            return{
                ...state,
                data: state.data.map(todo => {
                    if (todo.id === toDoCompleted.id) {
                        return toDoCompleted;
                    }
                    return todo;
                }),
            };

        }
        case LOAD_TODOS_SUCCESS: {
            const { todos } = payload;
            return {
                ...state,
                isLoading: false,
                data: todos,
            };
        }
        case LOAD_TODOS_IN_PROGRESS: 
            return {
                ...state, 
                isLoading: true
            };
        case LOAD_TODOS_FAILURE:
            return{
                ...state,
                isLoading: false,
            };
        //THIS MUST BE DONE always return the state 
        default:
            return state;
    }

}