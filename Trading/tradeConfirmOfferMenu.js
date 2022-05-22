var offset=128;

function openTradeConfirm(event){
    var gui=event.API.createCustomGui(0, 256, 256, false);
    gui.setBackgroundTexture("obscureobsidian:textures/gui/black_square.png");
    gui.addTexturedRect(101, "obscureobsidian:textures/gui/grey_square.png", 122, 0, 4, 200);
    gui.addTexturedRect(102, "obscureobsidian:textures/gui/grey_square.png", 0, 198, 250, 4);
    //Your offer's components
    gui.addLabel(0, "Your Offer", 32, 5, 100, 20);
    gui.addTexturedRect(103, "obscureobsidian:textures/gui/grey_square.png", 4, 30, 114, 72);
    gui.addTexturedRect(104, "obscureobsidian:textures/gui/grey_square.png", 4+offset, 30, 114, 72);
    //Automatically adds the pokemon in their spots, first pokemon is at 6 on the x axis and it automatically puts 38 pixels of distance for the ones on the 2nd column
    //Starting coordinate is 32 for the y axis and it automatically adds 34 between each row
    for(var i=0;i<5;i++){
        gui.addTexturedRect(111+i, "pixelmon:textures/sprites/pokemon/stakataka.png", 6+38*(i%3), 32+34*(i/3), 256, 256).setScale(0.125);
        gui.addTexturedButton(521+i, "", 6+38*(i%3), 32+34*(i/3), 256, 256, "obscureobsidian:textures/gui/transparent.png");
    }
    gui.addScroll(300, 2, 132, 118, 60, ["Your", "Items", "Here"]);
    gui.addLabel(1, "$"+"0", 32, 108, 100, 20);
    //The other person's offer's components
    gui.addLabel(2, "Their Offer", 32+offset, 5, 100, 20);
    for(var i=0;i<5;i++){
        gui.addTexturedRect(111+i, "pixelmon:textures/sprites/pokemon/stakataka.png", offset+6+38*(i%3), 32+34*(i/3), 256, 256).setScale(0.125);
        gui.addTexturedButton(531+i, "", offset+6+38*(i%3), 32+34*(i/3), 256, 256, "obscureobsidian:textures/gui/transparent.png");
    }
    gui.addScroll(301, 2+offset, 132, 118, 60, getItems(["Their", "Items", "Here"]));
    gui.addLabel(3, "$"+"100", 32+offset, 108, 100, 20);
    gui.addButton(500, "Accept", 64, 218, 48, 20);
    gui.addButton(501, "Deny", 144, 218, 48, 20);
    //If you want to put the component "Waiting for other player", put the other 2 above in comments. I'll be making code soon to make the right one appear when I get to that part
    //gui.addLabel(210, "Waiting for other player", 10, 202, 236, 20);
    event.player.showCustomGui(gui);
}