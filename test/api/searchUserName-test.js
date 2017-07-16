/**
 * Created by liyangfan on 17-7-16.
 */
const request = require('supertest');
const server = require("../../server");
const clear = require("../../mysql/helpers/clear");
const addUser = require("../../mysql/helpers/addUser");

describe('test getAllUser', ()=> {

    beforeEach((done) => {

        addUser({
            userName: '001',
            name: 'lili',
            age: 12,
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

    it('should return 201 and user information', (done)=> {
        request(server)
            .post('/searchByUserName')
            .send({userName: '001'})
            .expect({
                httpCode: 201, user: [{
                    userName: '001',
                    name: 'lili',
                    age: 12,
                    gender: 'female',
                    phone: 132555,
                    email: '123@qq.com',
                    remark: 'good'
                }]
            }, done)
    })
});