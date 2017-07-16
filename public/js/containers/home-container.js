import React from 'react'
import Home from '../components/Home';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    console.log("state", state);
    return {
        user: state.allUser.user,
        delStatus: state.delUser.delStatus,
        addStatus: state.addUser.addStatus,
        updateStatus: state.updateStatus.updateStatus
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        getAllUser: ()=> {
            dispatch({type: "GET_ALL_USER"});
        },
        deleteUser: (index)=> {
            dispatch({type: "DELETE_USER", index})
        },
        updateInf: (text)=> {
            dispatch({type: "UPDATE_INF", text})
        },
        searchByUserName: (text)=> {
            dispatch({type: "SEARCH_BY_USERNAME", text})
        },
        updateDelStatus: (status)=> {
            dispatch({type: "DELETE_STATUS", status})
        },
        updateUpdateStatus: (status)=> {
            dispatch({type: "UPDATE_USER_STATUS", status})
        },
        updateAddStatus: (status)=> {
            dispatch({type: "ADD_USER_STATUS", status})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);