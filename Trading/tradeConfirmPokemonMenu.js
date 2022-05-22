function openTradeConfirmPokemon(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("obscureobsidian:textures/gui/black_square.png");
    gui.addLabel(0, "Your Offer", 100, 2, 200, 20);
    gui.addTexturedRect(100, "obscureobsidian:textures/gui/grey_square.png", 20, 20, 192, 124);
    gui.addTexturedRect(101, "obscureobsidian:textures/gui/dark_grey_square.png", 20, 20, 64, 64);
    gui.addLabel(210, "Stat", 120, 12, 32, 32);
    gui.addLabel(220, "EVs", 150, 12, 32, 32);
    gui.addLabel(230, "IVs", 180, 12, 32, 32);
    gui.addButton(502, "Change to theirs", 60, 190, 128, 20);
    for(var i=0;i<6;i++){
        gui.addLabel(211+i, "100",120, 23+10*i, 32, 32);
        gui.addLabel(221+i, "252",150, 23+10*i, 32, 32);
        gui.addLabel(231+i, "31",180, 23+10*i, 32, 32);
    }
    event.player.showCustomGui(gui);
    gui.addTexturedRect(102, "pixelmon:textures/sprites/pokemon/blaziken.png", 20, 20, 256, 256).setScale(0.25);
    for(var i=0;i<4;i++){
        gui.addLabel(241+i, "-"+"High Horsepower", 106, 94+11*i, 128, 16);
    }
    gui.addLabel(251, "Blaziken", 21, 82, 128, 16);
    gui.addLabel(255, "Adrenaline Orb", 22, 94, 128, 16);
    gui.addLabel(252, "Lvl: "+"69", 25, 106, 128, 16);
    gui.addLabel(253, "420069"+" exp", 23, 118, 128, 16);
    gui.addTexturedRect(103, "obscureobsidian:textures/gui/grey_square.png", 20, 150, 192, 32);
    gui.addLabel(254, "Adamant"+" Nature", 23, 130, 128, 16);
    gui.addLabel(201, "HP", 95, 23, 32, 32);
    gui.addLabel(202, "Atk", 94, 33, 32, 32).setColor(3931940);
    gui.addLabel(203, "Def", 94, 43, 32, 32);
    gui.addLabel(204, "SpA", 93, 53, 32, 32).setColor(14549248);
    gui.addLabel(205, "SpD", 93, 63, 32, 32);
    gui.addLabel(206, "Spe", 93, 73, 32, 32);
    gui.addTexturedRect(103, "obscureobsidian:textures/gui/grey_square.png", 20, 150, 192, 32);
    for(var i=0;i<pokemonList.size();i++){
        gui.addTexturedRect(111+i, "pixelmon:textures/sprites/pokemon/blaziken.png", 20+32*i, 150, 256, 256).setScale(0.125);
        gui.addTexturedButton(511+i, "", 20+32*i, 150, 32, 32, "obscureobsidian:textures/gui/transparent.png");
    }
    gui.addButton(501, "Back", 128, 216, 60, 20);
    event.player.showCustomGui(gui);
}