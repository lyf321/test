/**
 * Created by liyangfan on 17-7-14.
 */
module.exports = (state = {user: []}, action) => {
    console.log("    state.allUser.user")
        switch (action.type) {
        case "USER":
            return {user: action.user};
        default:
            return state
    }
};