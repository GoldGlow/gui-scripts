function openRouteNotifMenu(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui=getConfigDropdownComponents(gui);
    gui.getComponent(201).setText("Route Notification");
    gui.getComponent(300).setList(["Not", "Properly", "Implemented", "Yet"]);
    gui.addLabel(200, "This is an example of a description", 7, 32, 114, 94);
    event.player.showCustomGui(gui);
}