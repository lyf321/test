/**
 * Created by liyangfan on 17-7-15.
 */
module.exports = (state = {updateStatus: 0}, action) => {

    switch (action.type) {
        case "UPDATE_USER_STATUS":
            return {updateStatus: action.status};
        default:
            return state
    }
};