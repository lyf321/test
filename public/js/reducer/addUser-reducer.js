/**
 * Created by liyangfan on 17-7-15.
 */

module.exports = (state = {addStatus: 0}, action) => {

    switch (action.type) {
        case "ADD_USER_STATUS":
            return {addStatus: action.status};
        default:
            return state
    }
};