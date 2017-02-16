import ActionTypes from '../constants/ActionTypes';

const authStatusReducer = function(state = false, action){
    console.log('authStatusReducer', 'reducer called', arguments);
    switch (action.type){
        case ActionTypes.LOGIN_SUCCESS:
            return true;
        case ActionTypes.LOGIN_FAILURE:
            return false;
        case ActionTypes.LOGOUT_COMPLETE:
            return false;
    }
    return state;
};

export default authStatusReducer;