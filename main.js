let active = false;
let firstCard;
let secondCard;
let cards = $('.card');
const flip = function(){
    this.classList.toggle('flip');
    if(active){
        secondCard = this;
        active=false;
        console.log('sec',secondCard, active)
        if((($(firstCard).find("img")[0].src) === ($(secondCard).find("img")[0].src) )&&(firstCard !== secondCard)){
            console.log("kjkjkjkjjkjkjkjk")
            $(firstCard).unbind()
            $(secondCard).unbind()
        }else{
            console.log("oooooooooooo")
            setTimeout(() => {
                firstCard.classList.toggle('flip');
                secondCard.classList.toggle('flip');
            },1000)
            
        }
    }else{
        active=true;
        firstCard=this;
        console.log('f',firstCard ,active)
    }
    

}
cards.on("click",flip)







