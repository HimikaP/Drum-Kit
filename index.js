var i=1
while(i<document.querySelectorAll(".drum").length){
    document.querySelectorAll("button")[i].addEventListener("click", function (){ 
        makeSound(this.innerHTML);
        Effects(this.innerHTML);
        
        
    })
        // this.style.color = 'white';

       

        document.addEventListener("keypress", function(e){
        makeSound(e.key);
        Effects(e.key)
        
    })
    
    function makeSound(key) {

        switch(key) {
            case "w" : var sound = new Audio('sounds/tom-1.mp3');
                        sound.play();
                        break;
            case "a" : var sound = new Audio('sounds/tom-2.mp3');
                        sound.play();
                        break;
            case "s" : var sound = new Audio('sounds/tom-3.mp3');
                        sound.play();
                        break;
            case "d" : var sound = new Audio('sounds/tom-4.mp3');
                        sound.play();
                        break;
            case "j" : var sound = new Audio('sounds/crash.mp3');
                        sound.play();
                        break;
            case "k" : var sound = new Audio('sounds/kick-bass.mp3');
                        sound.play();
                        break;
            case "l" : var sound = new Audio('sounds/snare.mp3');
                        sound.play();
                        break;

                        default: console.log("erroneous code");

        }}
        
        function Effects(Ke){
            var shadowEffect = document.querySelector("." + Ke);
            shadowEffect.classList.add("pressed");

            setTimeout( ()=>{
                shadowEffect.classList.remove("pressed");
            },100 ) ;
        }


    i++;
}

// To add sounds 
// var sound = new Audio("./sounds/tom-1.mp3");
//         sound.play()
