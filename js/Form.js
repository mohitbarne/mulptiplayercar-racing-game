class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
  }
   
  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(windowWidth/2 - 100,20);

    this.input.position(windowWidth/2 - 100, windowHeight/4);
    this.button.position(windowWidth/2,windowHeight/3);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });

  }
}
