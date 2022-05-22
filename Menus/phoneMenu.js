function getPhoneMenu(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("obscureobsidian:textures/gui/black_square.png");
    gui.addTexturedRect(100, "obscureobsidian:textures/gui/grey_square.png", 0, 0, 256, 20);
    gui.addLabel(200, "Your Offer", 100, 0, 128, 20);
    gui=addOfferedPokemon(gui, player);
    gui.addTexturedRect(101, "obscureobsidian:textures/gui/grey_square.png", 40, 30, 174, 32);
    gui.addLabel(203, "Items", 110, 68, 128, 10);
    gui.addScroll(300, 60, 90, 120, 60, ["Selected", "Items", "Here"]);
    gui.addButton(502, "Edit", 100, 155, 48, 20);
    gui.addLabel(201, "$", 42, 187, 20, 10);
    gui.addTextField(400, 52, 181, 80, 20);
    gui.addLabel(202, "(Max "+ "0"+")", 140, 187, 128, 10);
    gui.addButton(500, "Submit", 64, 218, 48, 20);
    gui.addButton(501, "Cancel", 144, 218, 48, 20);
    for(var i=0;i<5;i++){
        gui.addTexturedRect(102+i, "pixelmon:textures/items/pokeballs/pokeball.png", 42+34*i, 30, 256, 256).setScale(0.125);
        gui.addTexturedButton(510+i, "", 42+34*i, 30, 32, 32, "obscureobsidian:textures/gui/transparent.png");
    }
    event.player.showCustomGui(gui);
}