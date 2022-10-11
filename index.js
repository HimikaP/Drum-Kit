var i=1
while(i<document.querySelectorAll(".drum").length){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        alert("Oh ! I got clicked");
    });
    
    i++;
}

