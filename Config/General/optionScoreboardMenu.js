function openScoreboardMenu(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui=getConfigDropdownComponents(gui);
    gui.getComponent(201).setText("Scoreboard");
    gui.getComponent(300).setList(["Nothing", "General", "Quest Info", "Chain", "Online Friends"]);
    gui.addLabel(200, "This is an example of a description", 7, 32, 114, 94);
    event.player.showCustomGui(gui);
}