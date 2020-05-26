import React, { useEffect } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
//import './TodoList.css';
import { connect } from 'react-redux';
import { loadTodos, removeTodoRequest, completeTodoRequest } from './thunks';
import {getTodosLoading, getCompletedTodos, getIncompleteTodos} from './selectors';
import styled from 'styled-components';

//first styled component

// const BigRedText = styled.div` // could be styled.button styled.h1 etc...
// font-size: 48px;
// color: #FF0000
// `;



const ListWrapper = styled.div`
max-width: 700px;
margin: auto;
`;

//the todos prop has a default prop of [] to save us from error.
const TodoList = ({ completedTodos, incompleteTodos, isLoading, onRemovedPressed, onCompletePressed, startLoadingTodos }) => {
    useEffect(() => {
        startLoadingTodos();
    }, [])
    const loadingMessage = <div>loading todos...</div>
    const content = (
        <ListWrapper>
            {/* <BigRedText>IM a Styled Component</BigRedText> */}
            <NewTodoForm />
            <h3>Incomplete: </h3>
            {incompleteTodos.map(todo => <TodoListItem
                todo={todo}
                onRemovedPressed={onRemovedPressed}
                onCompletePressed={onCompletePressed} />
            )}
            <h3>Completed: </h3>
            {completedTodos.map(todo => <TodoListItem
                todo={todo}
                onRemovedPressed={onRemovedPressed}
                onCompletePressed={onCompletePressed} />
            )}
        </ListWrapper>
    );
    return isLoading ? loadingMessage : content;
};
const mapStateToProps = state => (
    {
        // todos: state.todos,
        // isLoading: state.isLoading, before selectors

        isLoading: getTodosLoading(state),
        // todos: getTodos(state),
        completedTodos: getCompletedTodos(state),
        incompleteTodos: getIncompleteTodos(state),
    });

const maptDispatchToProps = dispatch => ({
    onRemovedPressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(completeTodoRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos()),

})

export default connect(mapStateToProps, maptDispatchToProps)(TodoList);