import React from 'react';
//import './TodoListItem.css';
import styled from 'styled-components';

const ToDoItemContainer = styled.div`
background: #fff;
border-radius: 8px;
margin-top: 8px;
padding: 16px;
position: relative;
box-shadow: 0 4px 8px grey;
`;

//do this with  button as well. 
const ToDoItemContainerWithWarning = styled(ToDoItemContainer)`
border-bottom: ${props => ( new Date(props.createdAt) > new Date(Date.now() - 8640000 * 5)
    ? 'none'
    : '2px Solid red')};
`;

const ButtonsContainer = styled.div`
position: absolute;
right: 12px;
bottom: 12px;
`;


const Button = styled.button`
font-size: 16px;
padding: 8px;
border: none;
border-radius: 8px;
outline: none;
cursor: pointer;
`;
const CompletedButton = styled(Button)`
display: inline-block;
background-color: #22ee22;

`;

const RemoveButton = styled(Button)`
display: inline-block;
background-color: #ee2222;
margin-left: 8px;
`;

const TodoListItem = ({ todo, onRemovedPressed, onCompletePressed }) => {
     const Container = todo.isCompleted ? ToDoItemContainer : ToDoItemContainerWithWarning;
    return (
   
        // pass prop to styled component
        <Container createdAt={todo.createdAt}> 
            <h3>{todo.text}</h3>
            <p>
                Created on: &nbsp;
                {(new Date(todo.createdAt)).toLocaleDateString()}
            </p>
            <ButtonsContainer>
                {todo.isCompleted ? null :
                    <CompletedButton
                        onClick={() => onCompletePressed(todo.id)}
                        className="completed-button">Mark As Completed</CompletedButton>
                }
                <RemoveButton
                    onClick={() => onRemovedPressed(todo.id)}
                    className="remove-button">Remove</RemoveButton>
            </ButtonsContainer>

        </Container>
    );
}


export default TodoListItem;