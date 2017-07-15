/**
 * Created by liyangfan on 17-7-15.
 */
import React from 'react'
import update from '../components/updateUser';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
    return{
        updateInfo:state.updateInfo
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        updateUser:(text)=>{
            console.log("text;",text);
            dispatch({type:"UPDATE_USER",text});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(update);