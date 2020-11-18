document.addEventListener('keyup', function (e) {
    /*switch (e.code) {
        case 'ArrowUp':
        case 'ArrowLeft':
        case 'ArrowRight':
        case 'ArrowDown':
            imageManager.execute(e.code)
            break
    // check if method in imageManager exists 
    }*/
    if (imageManager.hasOwnProperty(e.code)) {
        imageManager.execute(e.code)
    }
})

let imageManager = {
    image: document.querySelector('.twitter-picture'),
    ArrowUp: function () {    
        this.image.top = this.image.offsetTop -10 + 'px'
    },
    ArrowLeft: function (){
        this.image.left = this.image.offsetLeft -10 + 'px'
    },
    ArrowRight: function (){
        this.image.left = this.image.offsetLeft +10 + 'px'
    },
    ArrowDown: function (){
        this.image.top = this.image.offsetTop +10 + 'px'
    },
}

imageManager.execute = function (key) {
    let methodName = imageManager[key]
    return methodName.apply(imageManager)
}

function RandFunction(max){
    return Math.floor(Math.random() * Math.floor(max));
}

//This function do not work 
setInterval(function () {
    
     var random = RandFunction(4);

    if (random = 0){
        imageManager.ArrowUp
     }
    else if (random = 1){
        imageManager.ArrowRight
    }
    else if (random = 2){
        imageManager.ArrowDown
    }
    else if (random = 3){
        imageManager.ArrowLeft
    }
}, 500)

