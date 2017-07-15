import {combineReducers} from 'redux';
import allUser from './home-reducer';
import delUser from './deleteUser-reducer';
import addUser from './addUser-reducer';


export default combineReducers({
    allUser,
    delUser,
    addUser
});