var bagMenuData=Java.type("com.goldenglow.common.guis.NewCustomGuis.pokehelper.bag.BagDataHandler").instance;

function openBag(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("obscureobsidian:textures/gui/black_square.png");
    //Ideally remove the line below and properly integrate the 2nd color layer into one image with the background
    gui.addTexturedRect(100, "obscureobsidian:textures/gui/grey_square.png", 0, 0, 256, 20);
    //The previous comment applies to the line above this one
    gui.addLabel(200, bagMenuData.getBagData(event.player).getBagCategory().getName(), 100, 0, 128, 20);
    gui.addButton(501, "0", 6, 26, 20, 20);
    gui.addButton(502, "1", 38, 26, 20, 20);
    gui.addButton(503, "2", 70, 26, 20, 20);
    gui.addButton(504, "3", 102, 26, 20, 20);
    gui.addButton(505, "4", 134, 26, 20, 20);
    gui.addButton(506, "5", 166, 26, 20, 20);
    gui.addButton(507, "6", 198, 26, 20, 20);
    gui.addButton(508, "7", 230, 26, 20, 20);
    //Not every item category will have a use button, will be handled on the backend
    gui.addTexturedButton(509, "Use", 0, 172, 128, 20, "obscureobsidian:textures/gui/arrow_select.png", 0, 0);
    gui.addTexturedButton(510, "Withdraw", 0, 192, 128, 20, "obscureobsidian:textures/gui/arrow_select.png", 0, 0);
    gui.addTexturedButton(511, "Cancel", 0, 212, 128, 20, "obscureobsidian:textures/gui/arrow_select.png", 0, 0);
    gui.addScroll(300, 130, 60, 115, 180, ["Item 1", "Item 2"]);
    gui.addTexturedRect(101, "pixelmon:textures/items/healingitems/potion.png", 48, 64, 256, 256).setScale(0.125);
    event.player.showCustomGui(gui);
}