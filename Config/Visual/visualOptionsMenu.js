function openVisualOptionsMenu(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("customnpcs:textures/gui/bgfilled.png");
    gui.addLabel(100, "Visual Settings", 85, 4, 128, 20);
    gui.addLabel(101, "Helper Appearance", 20, 30, 128, 20);
    gui.addTexturedButton(501, "Filler", 122, 30, 80, 20, "obscureobsidian:textures/gui/dark_grey_square.png");
    gui.addLabel(102, "Route Notification", 29, 55, 128, 20);
    gui.addTexturedButton(502, "Filler", 122, 55, 80, 20, "obscureobsidian:textures/gui/dark_grey_square.png");
    gui.addButton(500, "Back", 30, 212, 64, 20);
    event.player.showCustomGui(gui);
}