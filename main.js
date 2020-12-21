let active = false;
let opened = false;
let firstCard;
let secondCard;
let cards = $('.card');
let streaks = $('#streak-count');
let streak=0;
let timer = 100;
let timeCount = $('#time-count');
let prog = $('.meter > span')
let correct=0;
let progCount=$('#prog-count');

const flip = function(){
    if (firstCard === this && opened){
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
            correct++;
            streak++;
            streaks[0].innerHTML = streak
        }else{
            streak=0;
            streaks[0].innerHTML = streak
            opened=false;
            console.log("oooooooooooo")
            setTimeout(() => {
                firstCard.classList.toggle('flip');
                secondCard.classList.toggle('flip');
            },1000)
            
        }
        progCount[0].innerHTML=(((correct/(cards.length/2))*100)+'%')
        prog.css( "width",((correct/(cards.length/2))*100)+'%' )
        console.log(opened)
    }else{
        opened=true;
        active=true;
        firstCard=this;
        console.log('f',firstCard ,active)
        console.log(opened)
    }
    }
    setTimeout(() => {
        if(correct === cards.length/2){
        alert('Good job, You did it!')
        clearInterval(inter);
        }
    },500)
    
console.log(streak);
console.log(progCount[0]);
}
cards.on("click",flip)



let inter = setInterval(function(){
    if(timer ===0){
    clearInterval(inter);
    confirm("Oops, time's out!")
    location.reload();
    }

    timeCount[0].innerHTML=timer;
    timer--
}, 1000);
setInterval(function(){
    alert("Popup window!");
}, 102000);






