import { combineReducers } from 'redux'
import AppMenusReducer from './AppMenus.reducer'
import ActiveMenuReducer from './ActiveMenu.reducer'
import AuthStatusReducer from './AuthStatus.reducer'


const rootReducer = combineReducers({
    menus: AppMenusReducer,
    activeMenu: ActiveMenuReducer,
    authStatus: AuthStatusReducer
});

export default rootReducer;