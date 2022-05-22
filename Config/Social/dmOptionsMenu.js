function openDmOptionsMenu(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("customnpcs:textures/gui/bgfilled.png");
    gui.addLabel(100, "DM Settings", 85, 4, 128, 20);
    gui.addLabel(101, "Anyone", 81, 30, 128, 20);
    gui.addTexturedButton(501, "", 148, 30, 20, 20, "obscureobsidian:textures/gui/phone/collective.png", 216, 90);
    gui.addLabel(102, "Friends", 81, 55, 128, 20);
    gui.addTexturedButton(502, "", 148, 55, 20, 20, "obscureobsidian:textures/gui/phone/collective.png", 236, 90);
    gui.addButton(500, "Back", 30, 212, 64, 20);
    event.player.showCustomGui(gui);
}