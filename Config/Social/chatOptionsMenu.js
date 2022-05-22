function openChatOptionsMenu(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("customnpcs:textures/gui/bgfilled.png");
    gui.addLabel(100, "Visible Chats", 85, 4, 128, 20);
    gui.addLabel(101, "DM Settings", 61, 30, 128, 20);
    gui.addTexturedButton(501, "Change", 122, 30, 80, 20, "obscureobsidian:textures/gui/dark_grey_square.png");
    gui.addLabel(102, "Global Chat", 60, 55, 128, 20);
    gui.addTexturedButton(502, "", 148, 55, 20, 20, "obscureobsidian:textures/gui/phone/collective.png", 216, 90);
    gui.addButton(500, "Back", 30, 212, 64, 20);
    event.player.showCustomGui(gui);
}