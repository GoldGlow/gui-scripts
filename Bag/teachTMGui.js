function openTeachMenu(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("obscureobsidian:textures/gui/choosepokemon.png");
    gui.addLabel(200, "Teach <Attack name> to:", 20, 176, 128, 20);
    event.player.showCustomGui(gui);
}