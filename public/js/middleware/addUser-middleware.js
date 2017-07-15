/**
 * Created by liyangfan on 17-7-14.
 */

import request from 'superagent'

export default store=>next=>action=> {
    if (action.type === "ADD_USER") {
        request.post('/addUser')
            .send({
                userName: action.text.userName,
                name: action.text.name,
                age: action.text.age,
                gender: action.text.gender,
                phone: action.text.phone,
                email: action.text.email,
                remark: action.text.remark
            })
            .end((err, res) => {
                next({type:"ADD_USER_STATUS",status:res.body.result.status});
                // console.log("adduser:", res.body);
            });
    } else {
        next(action)
    }
}