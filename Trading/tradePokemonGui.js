function openTradeOffer(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.addLabel(0, "Your Offer", 100, 2, 200, 20);
    gui.addTexturedRect(100, "obscureobsidian:textures/gui/grey_square.png", 20, 20, 192, 124);
    gui.addTexturedRect(101, "obscureobsidian:textures/gui/dark_grey_square.png", 20, 20, 64, 64);
    gui.addLabel(210, "Stat", 120, 12, 32, 32);
    gui.addLabel(220, "EVs", 150, 12, 32, 32);
    gui.addLabel(230, "IVs", 180, 12, 32, 32);
    gui.addButton(502, "Change to party", 60, 190, 128, 20);
    gui.addButton(500, "Remove", 60, 216, 60, 20);
    event.player.showCustomGui(gui);
    for(var i=0;i<6;i++) {
        gui.addLabel(211 + i, "184" + "", 120, 23 + 10 * i, 32, 32);
        gui.addLabel(221 + i, "31" + "", 150, 23 + 10 * i, 32, 32);
        gui.addLabel(231 + i, "252" + "", 180, 23 + 10 * i, 32, 32);
    }
    //Showcased Pokemon
    gui.addTexturedRect(102, GuiUtils.getPokemonTexture(showcasedPokemon), 20, 20, 256, 256).setScale(0.25);
    //Moves
    for(var i=0;i<showcasedPokemon.getMoveset().size();i++){
        gui.addLabel(241+i, "-"+"High Horsepower", 106, 94+11*i, 128, 16);
    }
    //Other info
    gui.addLabel(251, "Magikarp", 21, 82, 128, 16);
    var heldItem="Air";
    if(heldItem.equals("Air")){
        heldItem="None";
    }
    gui.addLabel(255, heldItem, 22, 94, 128, 16);
    gui.addLabel(252, "Lvl: "+"69", 25, 106, 128, 16);
    gui.addLabel(253, "420069"+" exp", 23, 118, 128, 16);
    gui.addLabel(254, "Adamant"+" Nature", 23, 130, 128, 16);
    gui.addLabel(201, "HP", 95, 23, 32, 32);
    gui.addLabel(202, "Atk", 94, 33, 32, 32);
    gui.addLabel(203, "Def", 94, 43, 32, 32);
    gui.addLabel(204, "SpA", 93, 53, 32, 32);
    gui.addLabel(205, "SpD", 93, 63, 32, 32);
    gui.addLabel(206, "Spe", 93, 73, 32, 32);
    gui.addTexturedRect(103, "obscureobsidian:textures/gui/grey_square.png", 20, 150, 192, 32);
    for(var i=0;i<6;i++){
        gui.addTexturedRect(111+i, "pixelmon:textures/sprites/pokemon/magikarp.png", 20+32*i, 150, 256, 256).setScale(0.125);
        gui.addTexturedButton(511+i, "", 20+32*i, 150, 32, 32, "obscureobsidian:textures/gui/transparent.png");
    }
    gui.addButton(501, "Cancel", 128, 216, 60, 20);
    event.player.showCustomGui(gui);
}