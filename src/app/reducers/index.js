import { combineReducers } from 'redux'
import AppMenusReducer from './AppMenus.reducer'


const rootReducer = combineReducers({
    menus: AppMenusReducer
});

export default rootReducer;