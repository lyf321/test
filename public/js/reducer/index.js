import {combineReducers} from 'redux';
import allUser from './home-reducer';
import delUser from './deleteUser-reducer';
import addUser from './addUser-reducer';
import updateInfo from './updateUser-reducer';
import updateStatus from './updateStatus-reducer';


export default combineReducers({
    allUser,
    delUser,
    addUser,
    updateInfo,
    updateStatus
});