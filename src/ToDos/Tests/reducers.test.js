import {expect} from 'chai';
import {todos} from '../reducers';

describe('The Todos reducer', ()=>{
    it('Adds a new todo when CREATE_TODO action is recieved',()=>{
        const fakeTodo ={
            text: 'hello',
            isCompleted: false
        };
        const fakeAction ={
            type: 'CREATE_TODO',
            payload:{
                todo: fakeTodo,
            },
        };
        const originalState ={isLoading: false, data:[]};

        const expected ={
            isLoading: false,
            data: [fakeTodo],
        };
        const Actual = todos(originalState,fakeAction);

        expect(Actual).to.deep.equal(expected);

    });
});