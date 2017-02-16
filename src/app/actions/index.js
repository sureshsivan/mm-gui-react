
import ActionTypes from '../constants/ActionTypes';

const activateMenu = function(menuKey){
    return {
        type: ActionTypes.MENU_CLICKED,
        payload: menuKey
    };
};

export default activateMenu;
