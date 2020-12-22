let active = false;
let opened = false;
let started = true;
let allow = true;
let firstCard;
let secondCard;
let audioWrong = new Audio('Audio/');
audioWrong.volume=0.3;
let audioTime = new Audio('Audio/roblox-death-sound-effect.mp3');
audioTime.volume=0.3;
var audioFlip = new Audio('Audio/Card-flip-sound-effect.mp3');
audioFlip.volume=0.2;
var audioCorrect = new Audio('Audio/CorrectA.mp3');
audioCorrect.volume=0.2;
let backgroundAudio= new Audio('Audio/bgmusic.mp3');
backgroundAudio.volume=0.035;
let cards = $('.card');
let play = $('.start');
let streaks = $('#streak-count');
let streak=0;
let timer = 100;
let timeCount = $('#time-count');
let prog = $('.meter > span')
let correct=0;
let progCount=$('#prog-count');
let cardFace=$('.card-face > img');
let randomArrNum=[];
let arrCards=[
            'https://quizswish.com/wp-content/uploads/2020/06/LD.jpg',
            'https://quizswish.com/wp-content/uploads/2020/06/LD.jpg',
            'https://static.hollywoodreporter.com/sites/default/files/2015/06/johnny_depp_dior.jpg',
            'https://static.hollywoodreporter.com/sites/default/files/2015/06/johnny_depp_dior.jpg',
            'https://i.pinimg.com/originals/fe/ec/27/feec279250552054d2c48edea1896798.jpg',
            'https://i.pinimg.com/originals/fe/ec/27/feec279250552054d2c48edea1896798.jpg',
            'https://www.mordeo.org/files/uploads/2016/09/Keanu-Reeves-From-John-Wick-Chapter-2-Mobile-Wallpaper.jpg',
            'https://www.mordeo.org/files/uploads/2016/09/Keanu-Reeves-From-John-Wick-Chapter-2-Mobile-Wallpaper.jpg',
            'https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_.jpg',
            'https://m.media-amazon.com/images/M/MV5BMTg0MDc3ODUwOV5BMl5BanBnXkFtZTcwMTk2NjY4Nw@@._V1_.jpg',
            'https://www.denofgeek.com/wp-content/uploads/2019/11/star-wars-the-mandalorian-baby-yoda.png?fit=1401%2C734',
            'https://www.denofgeek.com/wp-content/uploads/2019/11/star-wars-the-mandalorian-baby-yoda.png?fit=1401%2C734',
            'https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest/top-crop/width/360/height/450?cb=20150206140125',
            'https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest/top-crop/width/360/height/450?cb=20150206140125',
            'https://i.pinimg.com/originals/c1/27/f3/c127f31130e49eb606ebf9a9be204c4c.jpg',
            'https://i.pinimg.com/originals/c1/27/f3/c127f31130e49eb606ebf9a9be204c4c.jpg',
            ];


console.log(randomArrNum)
const getRandom = function(){
    let random = Math.floor(Math.random() * cardFace.length)
    console.log(random)
        console.log('before')
    
    while(randomArrNum.includes(random)){
        console.log(random)
        console.log('random1')
        random = Math.floor(Math.random() * cardFace.length)
        console.log(random)
        console.log('random2')
    }
    randomArrNum.push(random)
        return random
}

            //cardFace=cardFace[1]
            for (let i = 0; i < arrCards.length; i++) {
                console.log($(cardFace[getRandom()]).attr('src',arrCards[i]))
            }
//console.log(cardFace.attr('src','jjjjjjjjj'))
const flip = function(){
    backgroundAudio.play();
    backgroundAudio.loop=true;
    if(allow){
        if (firstCard === this && opened){
        
        }else{
            audioFlip.play();
            this.classList.toggle('flip');
        if(active){
            opened=true;
            secondCard = this;
            active=false;
            console.log('sec',secondCard, active)
            if((($(firstCard).find("img")[0].src) === ($(secondCard).find("img")[0].src) )&&(firstCard !== secondCard)){
                audioCorrect.play();
                console.log("kjkjkjkjjkjkjkjk")
                $(firstCard).unbind()
                $(secondCard).unbind()
                correct++;
                streak++;
                streaks[0].innerHTML = streak
            }else{
                allow=false;
                audioWrong.play();
                audioFlip.play();
                streak=0;
                streaks[0].innerHTML = streak
                opened=false;
                console.log("oooooooooooo")
                setTimeout(() => {
                    firstCard.classList.toggle('flip');
                    secondCard.classList.toggle('flip');
                    audioFlip.play();
                    allow=true;
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
    }else{

    }


    
    setTimeout(() => {
        if(correct === cards.length/2){
            if(confirm("Good job, You did it! \nWanna play again!")){
                randomArrNum=[];
                location.reload();
                }else
                Redirect();
        clearInterval(inter);
        }
    },500)
    
console.log(streak);
console.log(progCount[0]);
}
console.log('jjjjjjjjjjjjjjjjjj',cards);
if(started){
console.log('ooiiiiiiiiiiooooooo',(cards).addClass('flip'))
let str = setInterval(function(){
    (cards).removeClass('flip')
    clearInterval(str);
}, 1500);

started=false;
}
console.log('hhhhhhhhhhhhhhhhhhhhhhhhh',cards);
cards.on("click",flip)

function Redirect() {
    window.location.href = "main.html";
}
let inter = setInterval(function(){
    if(timer ===0){
    clearInterval(inter);
    audioTime.play();
    }

    timeCount[0].innerHTML=timer;
    timer--
}, 1000);
setInterval(function(){
    if(confirm("Oops, time's out! \nWanna play again!")){
        randomArrNum=[];
        location.reload();
    }else
    Redirect();
}, 102000);






