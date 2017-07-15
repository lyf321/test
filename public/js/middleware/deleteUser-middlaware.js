/**
 * Created by liyangfan on 17-7-15.
 */

import request from 'superagent'

export default store=>next=>action=> {

    if (action.type === "DELETE_USER") {
        request.post('/deleteUser')
            .send({userName: action.index})
            .end((err, res) => {
                next({type: "DELETE_STATUS", status: res.body.status.status});
            });
    } else {
        next(action)
    }
}