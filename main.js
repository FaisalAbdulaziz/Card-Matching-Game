const flip = function(){
    this.classList.toggle('flip');
}

let cards = $('.card');

cards.on("click",flip)

