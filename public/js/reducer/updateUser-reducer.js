/**
 * Created by liyangfan on 17-7-15.
 */
module.exports = (state = {
    userName: '',
    name: '',
    age: 0,
    gender: '',
    phone: 0,
    email: '',
    remark: ''
}, action) => {

    switch (action.type) {
        case "UPDATE_INF":
            return {
                userName: action.text.userName,
                name: action.text.name,
                age: action.text.age,
                gender: action.text.gender,
                phone: action.text.phone,
                email: action.text.email,
                remark: action.text.remark
            };
        default:
            return state
    }
};