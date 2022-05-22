function openGeneralOptionsMenu(event){
    var gui=event.API.createCustomGui(6102, 256, 256, false);
    gui.setBackgroundTexture("customnpcs:textures/gui/bgfilled.png");
    gui.addLabel(100, "General Settings", 85, 4, 128, 20);
    gui.addLabel(101, "Scoreboard", 52, 30, 128, 20);
    gui.addTexturedButton(501, "Quest Info", 122, 30, 64, 20, "obscureobsidian:textures/gui/dark_grey_square.png");
    gui.addLabel(102, "Difficulty", 67, 55, 128, 20);
    gui.addTexturedButton(521, "Normal", 122, 55, 64, 20, "obscureobsidian:textures/gui/dark_grey_square.png");
    gui.addButton(500, "Back", 30, 212, 64, 20);
    event.player.showCustomGui(gui);
}