/**
 * Created by liyangfan on 17-7-14.
 */

const request = require('supertest');
const server = require("../../server");
const clear = require("../../mysql/helpers/clear");

describe('test addUser', ()=> {

    afterEach((done) => {
        clear();
        done();
    });

    it('should return 200 and status:1', (done)=> {

        request(server)
            .post('/addUser')
            .send({
                userName: '004',
                name: 'licici',
                age: 12,
                gender: 'female',
                phone: 132555,
                email: '123@qq.com',
                remark: 'good'
            })
            .expect({httpCode: 200, result: {status: 1}}, done)
    })

});