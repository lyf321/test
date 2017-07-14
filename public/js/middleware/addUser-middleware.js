/**
 * Created by liyangfan on 17-7-14.
 */

import request from 'superagent'

export default store=>next=>action=>{
    console.log("middle: ");
    if (action.type === "ADD_USER") {
        request.post('/addUser')
            .end((err, res) => {
                // next({type:"USER",user:res.body.user});
                console.log("adduser:",res.body);
            });
    } else {
        next(action)
    }
}