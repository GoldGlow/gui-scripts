function openPlayerRightClick(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("customnpcs:textures/gui/bgfilled.png");
    gui.addLabel(100, "Player Name Here", 74, 4, 128, 20);
    gui.addButton(500, "Profile", 62, 44, 80, 20);
    gui.addButton(501, "Trade", 62, 82, 80, 20);
    event.player.showCustomGui(gui);
}