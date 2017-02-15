/**
 * Menu class which represents a single menu item
 */
export default class Menu{
    constructor(key, label, iconCls='home'){
        this.key = key;
        this.label = label;
        this.iconCls = iconCls;
    }
}