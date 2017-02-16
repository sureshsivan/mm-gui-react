
import ActionTypes from '../constants/ActionTypes';

const activateMenu = function(menuKey){
    return {
        type: ActionTypes.MENU_CLICKED,
        payload: menuKey
    };
};

const mockLoginSuccess = function(){
    return {
        type: ActionTypes.LOGIN_SUCCESS,
        payload: null
    };
};

const mockLoginFailure = function(){
    return {
        type: ActionTypes.LOGIN_FAILURE,
        payload: null,
        error: true
    };
};

const mockLogout = function(){
    return {
        type: ActionTypes.LOGOUT_COMPLETE,
        payload: null
    };
};

export default { activateMenu, mockLoginSuccess, mockLoginFailure, mockLogout };
