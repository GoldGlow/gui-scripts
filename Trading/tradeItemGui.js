function openTradeItem(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("obscureobsidian:textures/gui/black_square.png");
    gui.setBackgroundTexture("obscureobsidian:textures/gui/black_square.png");
    gui.addTexturedRect(100, "obscureobsidian:textures/gui/grey_square.png", 0, 0, 256, 20);
    gui.addLabel(200, "TMs", 100, 0, 128, 20);
    gui.addLabel(201, "Offer", 48, 48, 128, 20);
    gui.addButton(501, "0", 6, 24, 20, 20);
    gui.addButton(502, "1", 38, 24, 20, 20);
    gui.addButton(503, "2", 70, 24, 20, 20);
    gui.addButton(504, "3", 102, 24, 20, 20);
    gui.addButton(505, "4", 134, 24, 20, 20);
    gui.addButton(506, "5", 166, 24, 20, 20);
    gui.addButton(507, "6", 198, 24, 20, 20);
    gui.addButton(508, "7", 230, 24, 20, 20);
    gui.addButton(500, "Confirm", 40, 215, 60, 20);
    gui.addButton(509, "Add", 160, 215, 60, 20);
    gui.addScroll(300, 130, 55, 115, 155, ["items", "in", "your", "bag"]).setDefaultSelection(0);
    gui.addScroll(301, 8, 65, 115, 145, ["Items", "in", "your", "offer"]);
    event.player.showCustomGui(gui);
}