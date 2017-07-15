import React from 'react'
import Home from '../components/Home';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
    console.log("state: ",state);
    return {
        user:state.allUser.user,
        delStatus:state.delUser.delStatus,
        addStatus:state.addUser.addStatus
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        getAllUser:()=>{
            dispatch({type:"GET_ALL_USER"});
        },
        deleteUser:(index)=>{
            dispatch({type:"DELETE_USER",index})
        },
        updateInf:(text)=>{
            dispatch({type:"UPDATE_INF",text})
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);