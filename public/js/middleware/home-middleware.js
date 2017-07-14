/**
 * Created by liyangfan on 17-7-14.
 */

import request from 'superagent'

export default store=>next=>action=>{
    console.log("middle: ");
    if (action.type === "GET_ALL_USER") {
        request.post('/getAllUser')
            .end((err, res) => {
                next({type:"USER",user:res.body.user});
                console.log("user:",res.body);
            });
    } else {
        next(action)
    }
}