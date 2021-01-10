class Form{
    constructor(){}
    display(){
    var title = createElement('h6')
    title.html("speed turbo")
    title.position(130,0)
    var input = createInput("name")
    var button = createButton("start")
    var greeting = createElement('h3')
    input.position(130,160)
    button.position(250,200)
    button.mousePressed(function(){
    input.hide()
    button.hide()
    var name = input.value()
    playerCount = playerCount+1
    player.update(name)
    player.updateCount(playerCount)
    greeting.html("hello wellcome to virtual pet"+name)
    greeting.shapeColor = "red";
    greeting.position(130,160)
    
    
    })
    
    
    
    
    }
    
    }
