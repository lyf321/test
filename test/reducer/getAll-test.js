/**
 * Created by liyangfan on 17-7-15.
 */

const reducer = require('../../public/js/reducer/home-reducer');
const expect = require('chai').expect;

describe('update User reducer test', () => {
    it('return updateStatus', () => {
        const state = {user: []};
        expect(reducer(state, {
            type: 'USER', user: {
                userName: '001',
                name: 'lili',
                age: 12,
                gender: 'female',
                phone: 132555,
                email: '123@qq.com',
                remark: 'good'
            }
        })).to.be.deep.equal({
            user: {
                userName: '001',
                name: 'lili',
                age: 12,
                gender: 'female',
                phone: 132555,
                email: '123@qq.com',
                remark: 'good'
            }
        });
    });
});