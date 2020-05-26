import { expect } from 'chai';
import {getCompletedTodos} from '../selectors';

describe('Get Completed Todos Selector', ()=>{
    it('Returns only completed todos',()=>{
        const fakeTodos = [
            {
                text: 'say hello', 
                isCompleted: true,
            },
            {
                text:'goodbye',
                isCompleted: false,
            },
            {
                text: 'BLAH',
                isCompleted: false,
            }
        ];

        const expected = [{text:'say hello', isCompleted: true,}];
        const actual = getCompletedTodos.resultFunc(fakeTodos); // create selector function
        expect(actual).deep.equal(expected);

    });
});