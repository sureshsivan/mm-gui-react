

const authStatusReducer = function(state = false, action){
    console.log('authStatusReducer', 'reducer called', arguments);
    switch (action.type){
        case ActionTypes.LOGIN_SUCCESS:
            return true;
        case ActionTypes.LOGIN_FAILURE:
            return false;
    }
    return state;
};