function getConfigDropdown(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("obscureobsidian:textures/gui/black_square.png");
    gui.addLabel(201, "title", 100, 0, 128, 20);
    gui.addScroll(300, 128, 22, 118, 200, ["Option 1", "Option 2"]);
    gui.addTexturedRect(100, "obscureobsidian:textures/gui/grey_square.png", 5, 22, 118, 98);
    gui.addButton(501, "Save", 10, 183, 108, 20);
    gui.addButton(502, "Cancel", 10, 213, 108, 20);
    return gui;
}

function getConfigDropdownComponents(gui){
    gui.setBackgroundTexture("obscureobsidian:textures/gui/black_square.png");
    gui.addLabel(201, "title", 100, 0, 128, 20);
    gui.addScroll(300, 128, 22, 118, 200, ["Option 1", "Option 2"]);
    gui.addTexturedRect(100, "obscureobsidian:textures/gui/grey_square.png", 5, 22, 118, 98);
    gui.addButton(501, "Save", 10, 183, 108, 20);
    gui.addButton(502, "Cancel", 10, 213, 108, 20);
    return gui;
}