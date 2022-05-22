function openMap(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("obscureobsidian:textures/gui/first_part_map.png");
    gui.addTexturedButton(501, "", 44, 88, 16, 16, "obscureobsidian:textures/gui/oobuttons.png", 160, 208);
    gui.addTexturedButton(502, "", 124, 116, 16, 16, "obscureobsidian:textures/gui/oobuttons.png", 160, 208);
    gui.addTexturedButton(503, "", 142, 162, 16, 16, "obscureobsidian:textures/gui/oobuttons.png", 160, 208);
    gui.addTexturedButton(504, "", 174, 132, 32, 32, "obscureobsidian:textures/gui/oobuttons.png", 160, 192);
    gui.addTexturedButton(505, "", 60, 88, 80, 16, "obscureobsidian:textures/gui/oobuttons.png", 160, 208);
    gui.addTexturedButton(506, "", 124, 88, 16, 28, "obscureobsidian:textures/gui/oobuttons.png", 160, 196);
    gui.addTexturedButton(507, "", 124, 132, 16, 24, "obscureobsidian:textures/gui/oobuttons.png", 160, 200);
    gui.addTexturedButton(508, "", 124, 140, 50, 16, "obscureobsidian:textures/gui/oobuttons.png", 160, 208);
    event.player.showCustomGui(gui);
}