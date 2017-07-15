/**
 * Created by liyangfan on 17-7-15.
 */

const request = require('supertest');
const server = require("../../server");
const addUser = require("../../mysql/helpers/addUser");

beforeEach(() => {
    addUser({
        userName: '111',
        name: 'libeiying',
        age: 33,
        gender: 'female',
        phone: 132555,
        email: '123@qq.com',
        remark: 'good'
    });
});

describe('test deleteUser', ()=> {
    it('should return 200 and status:1', (done)=> {
        request(server)
            .post('/addUser')
            .send({userName: '111'})
            .expect({httpCode: 200, status: {status: 1}}, done)
    })

});