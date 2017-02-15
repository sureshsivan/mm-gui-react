
import ActionTypes from '../constants/ActionTypes';

const activateMenu = function(menu){
    console.log('Activating Menu...', menu);
    return {
        type: ActionTypes.MENU_CLICKED,
        payload: menu
    };
};

export default activateMenu;
