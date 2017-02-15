import AppConfig from '../utils/mocks/AppConfigs'

const appMenusReducer = function(){
    console.log('appMenusReducer', 'reducer called', arguments);
    return AppConfig.MENUS;
}

export default appMenusReducer;