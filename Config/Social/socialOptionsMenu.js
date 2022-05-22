function openSocialOptionsMenu(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("customnpcs:textures/gui/bgfilled.png");
    gui.addLabel(100, "Social Settings", 85, 4, 128, 20);
    gui.addLabel(101, "Visible Chats", 53, 30, 128, 20);
    gui.addTexturedButton(501, "Change", 122, 30, 80, 20, "obscureobsidian:textures/gui/dark_grey_square.png");
    gui.addLabel(102, "Player Visibility", 40, 55, 128, 20);
    gui.addTexturedButton(502, "Change", 122, 55, 80, 20, "obscureobsidian:textures/gui/dark_grey_square.png");
    gui.addLabel(103, "Title", 94, 80, 128, 20);
    gui.addTexturedButton(503, "[Title Here]", 122, 80, 80, 20, "obscureobsidian:textures/gui/dark_grey_square.png");
    gui.addButton(500, "Back", 30, 212, 64, 20);
    event.player.showCustomGui(gui);
}