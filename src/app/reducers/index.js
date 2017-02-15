import { combineReducers } from 'redux'
import AppMenusReducer from './AppMenus.reducer'
import ActivateMenu from './ActiveMenu.reducer'


const rootReducer = combineReducers({
    menus: AppMenusReducer,
    activeMenu: ActivateMenu
});

export default rootReducer;