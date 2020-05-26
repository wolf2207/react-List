import React from 'react';
//import './App.css';
import {hot} from 'react-hot-loader';
import TodoList from './ToDos/TodoList'
import styled from 'styled-components'

const AppContainer = styled.div`
margin: 1rem;
font-family: Arial, Helvetica, sans-serif;
color: #222222;
width: 100vw;
height: 100vh;
`;
const App =() =>(
    <AppContainer>
        <TodoList/>
    </AppContainer>
);

export default hot(module)(App);