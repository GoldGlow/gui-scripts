function openConfigMenu(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("obscureobsidian:textures/gui/phone/blackphone_background"+"red"+".png");
    gui.addTexturedButton(501, "General", 104, 71, 50, 20, "obscureobsidian:textures/gui/oobuttons.png", 160, 204);
    gui.addTexturedButton(502, "Visual", 104, 101, 50, 20, "obscureobsidian:textures/gui/oobuttons.png", 160, 204);
    gui.addTexturedButton(503, "Social", 104, 131, 50, 20, "obscureobsidian:textures/gui/oobuttons.png", 160, 204);
    gui.addTexturedButton(504, "Music", 104, 161, 50, 20, "obscureobsidian:textures/gui/oobuttons.png", 160, 204);
    gui.addTexturedButton(500, "", 111, 209, 35, 7, "obscureobsidian:textures/gui/phone/collective.png", 210, 75);
    event.player.showCustomGui(gui);
}