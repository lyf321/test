/**
 * Created by liyangfan on 17-7-15.
 */

const reducer = require('../../public/js/reducer/addUser-reducer');
const expect = require('chai').expect;

describe('addUser reducer test', () => {
    it('return addStatus', () => {
        const state = {addStatus: 0};
        expect(reducer(state, {type: 'ADD_USER_STATUS', status: 1})).to.be.deep.equal({addStatus:1});
    });
});