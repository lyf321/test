import React from 'react'
import Home from '../components/Home';
import {connect} from 'react-redux';

const mapStateToProps = (state) =>{
    console.log("state.allUser.user: ",state.allUser.user);
    return {
        user:state.allUser.user
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        getAllUser:()=>{
            dispatch({type:"GET_ALL_USER"});
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);