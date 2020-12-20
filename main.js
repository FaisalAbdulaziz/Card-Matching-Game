let active = false;
let opened = false;
let firstCard;
let secondCard;
let temp;
let cards = $('.card');
const flip = function(){
    if (temp === this && opened){

    }else{
        this.classList.toggle('flip');
    if(active){
        opened=true;
        secondCard = this;
        active=false;
        console.log('sec',secondCard, active)
        if((($(firstCard).find("img")[0].src) === ($(secondCard).find("img")[0].src) )&&(firstCard !== secondCard)){
            console.log("kjkjkjkjjkjkjkjk")
            $(firstCard).unbind()
            $(secondCard).unbind()
        }else{
            opened=false;
            console.log("oooooooooooo")
            setTimeout(() => {
                firstCard.classList.toggle('flip');
                secondCard.classList.toggle('flip');
            },1000)
            
        }
        console.log(opened)
    }else{
        opened=true;
        active=true;
        firstCard=this;
        temp = firstCard;
        console.log('f',firstCard ,active)
        console.log(opened)
    }
    }
    
    

}
cards.on("click",flip)







