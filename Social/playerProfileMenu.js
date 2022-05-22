function openPlayerProfile(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("obscureobsidian:textures/gui/black_square.png");
    gui.addLabel(201, "Player Name", 25, 20, 128, 20);
    gui.addLabel(202, "[Title]", 25, 35, 128, 20);
    gui.addLabel(204, "Route 1", 128, 20, 128, 20);
    gui.addLabel(205, "Pokemon Seen: "+ "800", 25, 50, 128, 20);
    gui.addLabel(206, "Pokemon Caught: "+"1", 25, 65, 128, 20);
    gui.addLabel(207, "Play time: "+"0:00", 128, 50, 128, 20);
    gui.addLabel(208, "Titles: "+ "1" +"/"+"2", 128, 65, 128, 20);
    gui.addButton(0, "Add Friend", 156, 100, 80, 20);
    gui.addTexturedRect(100, "obscureobsidian:textures/gui/grey_square.png", 16, 100, 128, 64);
    gui.addTexturedRect(101, "obscureobsidian:textures/items/badge/badge1.png", 16, 100, 256, 256).setScale(0.125);
    gui.addTexturedRect(102, "obscureobsidian:textures/items/badge_shadows/badge2.png", 48, 100, 256, 256).setScale(0.125);
    gui.addTexturedRect(103, "obscureobsidian:textures/items/badge_shadows/badge3.png", 80, 100, 256, 256).setScale(0.125);
    gui.addTexturedRect(104, "obscureobsidian:textures/items/badge_shadows/badge4.png", 112, 100, 256, 256).setScale(0.125);
    gui.addTexturedRect(105, "obscureobsidian:textures/items/badge_shadows/badge5.png", 16, 132, 256, 256).setScale(0.125);
    gui.addTexturedRect(106, "obscureobsidian:textures/items/badge_shadows/badge6.png", 48, 132, 256, 256).setScale(0.125);
    gui.addTexturedRect(107, "obscureobsidian:textures/items/badge_shadows/badge7.png", 80, 132, 256, 256).setScale(0.125);
    gui.addTexturedRect(108, "obscureobsidian:textures/items/badge_shadows/badge8.png", 116, 136, 256, 256).setScale(0.1);
    event.player.showCustomGui(gui);
}