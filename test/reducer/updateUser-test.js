/**
 * Created by liyangfan on 17-7-15.
 */

const reducer = require('../../public/js/reducer/updateStatus-reducer');
const expect = require('chai').expect;

describe('update User reducer test', () => {
    it('return updateStatus', () => {
        const state = {updateStatus: 0};
        expect(reducer(state, {type: 'UPDATE_USER_STATUS', status: 1})).to.be.deep.equal({updateStatus:1});
    });
});