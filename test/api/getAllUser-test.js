/**
 * Created by liyangfan on 17-7-14.
 */

const request = require('supertest');
const server = require("../../server");

describe('test getAllUser', ()=> {
    it('should return 201 and allUser information', (done)=> {
        request(server)
            .post('/getAllUser')
            .expect({httpCode:201, user:[{
                userName: '001',
                name: 'lili',
                age: 12,
                gender: 'female',
                phone: 132555,
                email: '123@qq.com',
                remark: 'good'
            }, {
                userName: '002',
                name: 'Bob',
                age: 15,
                gender: 'male',
                phone: 1526325,
                email: '15623@qq.com',
                remark: 'bad'
            }]},done)
    })

});