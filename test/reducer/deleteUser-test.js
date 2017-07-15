/**
 * Created by liyangfan on 17-7-15.
 */
const reducer = require('../../public/js/reducer/deleteUser-reducer');
const expect = require('chai').expect;

describe('update User reducer test', () => {
    it('return updateStatus', () => {
        const state = {delStatus: 0};
        expect(reducer(state, {type: 'DELETE_STATUS', status: 1})).to.be.deep.equal({delStatus:1});
    });
});