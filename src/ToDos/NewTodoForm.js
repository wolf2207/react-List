import React, { useState } from 'react';
//import './NewTodoForm.css'
//give component access to the redux store
import {connect} from 'react-redux';
//import {createTodo} from './actions' //used for manual 
import {addToDoRequest} from './thunks';
import {getTodos} from './selectors';
import styled from 'styled-components'

const FormContainer = styled.div`
border-radius: 8px;
padding: 16px;
text-align: center;
box-shadow: 0 4px 8px grey;
`;

const NewTodoInput= styled.input`
font-size: 16px;
padding: 8px;
border: none;
border-bottom: 2px solid #ddd;
border-radius: 8px;
width: 70%;
outline: none;
`;

const NewTodoButton = styled.button`
font-size: 16px;
padding: 8px;
border: none;
border-radius: 8px;
outline: none;
cursor: pointer;
margin-left: 8px;
width: 20%;
background-color: #22ee22;
`;

const NewTodoForm = ({todos, onCreatePressed}) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <FormContainer>
            <NewTodoInput
                className="new-todo-input"
                type="text"
                placeholder="type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}></NewTodoInput>
            <NewTodoButton 
            onClick ={() =>{
                const isDuplicateText = todos.some(todo=>todo.text === inputValue);
                if(!isDuplicateText && !inputValue == '')
                {                  
                    onCreatePressed(inputValue);
                    setInputValue('');
                }              
            }
            }
            className="new-todo-button">Create Todo</NewTodoButton>
        </FormContainer>
    );
};

//object the has the entire redux state
// Take state object and return another object that has pieces of the state this component needs access too. 
const mapStateToProps = state=>({
    // todos: state.todos, before selector
    todos: getTodos(state),
});

//Properites of the object returned will be passed to the componet as props
//dispatch is a function that allows our componets to trigger functions that our redux store will respond too.
const mapDispatchToProps = dispatch =>({
    //onCreatePressed: text => dispatch(createTodo(text)), //manual update
    onCreatePressed: text => dispatch(addToDoRequest(text)),


});

export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);