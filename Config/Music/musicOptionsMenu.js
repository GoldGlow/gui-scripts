function openMusicOptionsMenu(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("customnpcs:textures/gui/bgfilled.png");
    gui.addLabel(100, "Music Settings", 85, 4, 128, 20);
    gui.addLabel(101, "Wild Battle Theme", 32, 30, 128, 20);
    gui.addTexturedButton(501, "Music name here", 122, 30, 112, 20, "obscureobsidian:textures/gui/dark_grey_square.png");
    gui.addLabel(102, "Trainer Battle Theme", 12, 55, 128, 20);
    gui.addTexturedButton(502, "Music name here", 122, 55, 112, 20, "obscureobsidian:textures/gui/dark_grey_square.png");
    gui.addLabel(103, "PVP Battle Theme", 32, 80, 128, 20);
    gui.addTexturedButton(503, "Music name here", 122, 80, 112, 20, "obscureobsidian:textures/gui/dark_grey_square.png");
    gui.addLabel(104, "PVP Theme Selection", 16, 105, 128, 20);
    gui.addTexturedButton(504, "Music name here", 122, 105, 112, 20, "obscureobsidian:textures/gui/dark_grey_square.png");
    gui.addButton(500, "Back", 30, 212, 64, 20);
    event.player.showCustomGui(gui);
}