import AppConfig from '../utils/mocks/AppConfigs'
import ActionTypes from '../constants/ActionTypes'

const activeMenuReducer = function(state = AppConfig.MENUS[0], action){
    console.log('activeMenuReducer', 'reducer called', arguments);
    switch (action.type){
        case ActionTypes.MENU_CLICKED:
            return action.payload;
    }
    return state;
}

export default activeMenuReducer;