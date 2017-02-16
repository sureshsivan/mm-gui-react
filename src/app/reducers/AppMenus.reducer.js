import AppConfig from '../utils/mocks/AppConfigs';
import ActionTypes from '../constants/ActionTypes';

const appMenusReducer = function(state = AppConfig.GUEST_MENU, action){
    console.log('appMenusReducer', 'reducer called', arguments);
    switch (action.type){
        case ActionTypes.LOGIN_SUCCESS:
            return AppConfig.USER_MENU;
        case ActionTypes.LOGIN_FAILURE:
        case ActionTypes.LOGOUT_COMPLETE:
            return AppConfig.GUEST_MENU;

    }
    return state;
}

export default appMenusReducer;