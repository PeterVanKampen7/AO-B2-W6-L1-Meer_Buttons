document.body.style.backgroundColor = "gray";
var container = document.getElementById("container");
container.style.backgroundColor = "white";
container.style.maxWidth = "600px";
container.style.margin = "0 auto";
for (var i = 1; i < 4; i++) {
    var button = document.createElement("button");
    button.innerHTML = "Button "+i;
    button.id = "button"+i;
    button.style.padding = "20px 40px";
    button.style.color = "white";
    button.style.margin = "20px";
    if(i == 1){
        button.style.backgroundColor = "green";
        button.style.marginLeft = "60px";
    }
    else if(i == 2){
        button.style.backgroundColor = "red";
    }
    else{
        button.style.backgroundColor = "blue";
    }
    container.appendChild(button);
}
document.getElementById("button1").onclick = function(){
    document.body.style.backgroundColor = "green";
}
document.getElementById("button2").onclick = function(){
    document.body.style.backgroundColor = "red";
}
document.getElementById("button3").onclick = function(){
    document.body.style.backgroundColor = "blue";
}