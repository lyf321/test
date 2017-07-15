/**
 * Created by liyangfan on 17-7-14.
 */
import React from 'react'
import addUser from '../components/addUser';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
    return{
        addStatus:state.addUser.addStatus
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        addUser:(text)=>{
            console.log("text;",text);
            dispatch({type:"ADD_USER",text});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(addUser);