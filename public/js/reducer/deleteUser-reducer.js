/**
 * Created by liyangfan on 17-7-15.
 */

module.exports = (state = {delStatus: 0}, action) => {

    switch (action.type) {
        case "DELETE_STATUS":
            return {delStatus: action.status};
        default:
            return state
    }
};