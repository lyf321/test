/**
 * Created by liyangfan on 17-7-15.
 */
import request from 'superagent'

export default store=>next=>action=> {
    console.log("updaate midd :",action.text);
    if (action.type === "UPDATE_USER") {
        request.post('/updateUser')
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
                next({type:"UPDATE_USER_STATUS",status:res.body.result.status});
                console.log("update  user  :", res.body);
            });
    } else {
        next(action)
    }
}