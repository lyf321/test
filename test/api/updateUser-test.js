/**
 * Created by liyangfan on 17-7-15.
 */
const request = require('supertest');
const server = require("../../server");
const addUser = require("../../mysql/helpers/addUser");
const clear = require("../../mysql/helpers/clear");

describe('test updateUser', ()=> {

    beforeEach((done) => {
        addUser({
            userName: '111',
            name: 'libeiying',
            age: 33,
            gender: 'female',
            phone: 132555,
            email: '123@qq.com',
            remark: 'good'
        }, ()=> {
            done();
        });
    });

    afterEach((done) => {
        clear();
        done();
    });

    it('should return 200 and status:1', (done)=> {
        request(server)
            .post('/updateUser')
            .send({
                userName: '111',
                name: 'baibai',
                age: 13,
                gender: 'female',
                phone: 13465655,
                email: '123@qq.com',
                remark: 'good'
            })
            .expect({httpCode: 200, result: {status: 1}}, done)
    })

});