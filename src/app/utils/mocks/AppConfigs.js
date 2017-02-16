import Menu from '../../models/Menu';

const GUEST_MENU = [
    new Menu('menu1', 'Guest 1'),
    new Menu('menu2', 'Guest 2'),
];

const USER_MENU = [
    new Menu('menu1', 'User 1'),
    new Menu('menu2', 'Menu 2'),
    new Menu('menu3', 'User 3', 'wifi'),
    new Menu('menu4', 'Menu 4', 'wifi'),
    new Menu('menu5', 'Menu 5', 'wifi')
];

export default {GUEST_MENU, USER_MENU};
