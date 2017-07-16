/**
 * Created by liyangfan on 17-7-16.
 */

import request from 'superagent'

export default store=>next=>action=> {

    if (action.type === "SEARCH_BY_USERNAME") {
        request.post('/searchByUserName')
            .send({userName: action.text})
            .end((err, res) => {
                console.log("req.body:",res.body);
                next({type: "USER", user: res.body.user});
            });
    } else {
        next(action)
    }
}