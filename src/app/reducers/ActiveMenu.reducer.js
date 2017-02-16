import AppConfig from '../utils/mocks/AppConfigs'
import ActionTypes from '../constants/ActionTypes'

const activeMenuReducer = function(state = AppConfig.GUEST_MENU[0].key, action){
    console.log('activeMenuReducer', 'reducer called', arguments);
    switch (action.type){
        case ActionTypes.MENU_CLICKED:
            return action.payload;
        case ActionTypes.LOGIN_SUCCESS:
            return AppConfig.USER_MENU[0].key;
        case ActionTypes.LOGIN_FAILURE:
            return AppConfig.GUEST_MENU[0].key;
    }
    return state;
}

export default activeMenuReducer;