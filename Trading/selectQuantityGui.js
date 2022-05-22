function openSelectItemQuantity(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("customnpcs:textures/gui/bgfilled.png");
    gui.addLabel(200, "How many will you add?", 10, 5, 128, 20);
    gui.addLabel(201, "Max: "+"2", 15, 15, 128, 20);
    gui.addTextField(400, 30, 33, 100, 20);
    gui.addButton(512, "Submit", 28, 58, 48, 20);
    gui.addButton(513, "Cancel", 85, 58, 48, 20);
    event.player.showCustomGui(gui);
}