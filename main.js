let active = false;// to know which card is selected
let opened = false;// this will allow me to select the same card after flip it back when get the wrong match
let started = true;// To show all cards for 1.5sec just when the game starts
let allow = true;// it wont allow u to make an action if it was false
let firstCard;// first card clicked
let secondCard;// second card clicked
let audioWrong = new Audio('Audio/');// Audio
audioWrong.volume=0.3;// Change Audio volume
let audioTime = new Audio('Audio/roblox-death-sound-effect.mp3');// Audio
audioTime.volume=0.3;// Change Audio volume
var audioFlip = new Audio('Audio/Card-flip-sound-effect.mp3');// Audio
audioFlip.volume=0.2;// Change Audio volume
var audioCorrect = new Audio('Audio/CorrectA.mp3');// Audio
audioCorrect.volume=0.2;// Change Audio volume
let backgroundAudio= new Audio('Audio/bgmusic.mp3');// Audio
backgroundAudio.volume=0.035;// Change Audio volume
let cards = $('.card');// selector contain all cards
let streaks = $('#streak-count');// selector
let streak=0;// count how many correct matching cards without getting one wrong
let timer = 100;// max time for the game
let timeCount = $('#time-count');// time selector
let prog = $('.meter > span')// selector
let correct=0; // counting the correct match
let progCount=$('#prog-count'); // to trace the progress
let cardFace=$('.card-face > img'); // selector
let randomArrNum=[]; // array contain numbers from math.random method to avoid overwrite the same card

// array contain all the images
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
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=480:*',
            'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/baby-yoda-old-yoda-1574103229.jpg?crop=0.486xw:0.973xh;0.514xw,0&resize=480:*',
            'https://i.pinimg.com/originals/c1/27/f3/c127f31130e49eb606ebf9a9be204c4c.jpg',
            'https://i.pinimg.com/originals/c1/27/f3/c127f31130e49eb606ebf9a9be204c4c.jpg',
            ];

/* this method will return a random number that did not got selected before */
const getRandom = function(){
    let random = Math.floor(Math.random() * cardFace.length)
    
    while(randomArrNum.includes(random)){
        random = Math.floor(Math.random() * cardFace.length)
    }
    randomArrNum.push(random)
        return random
}

/* this for loop will call the randomize method and will change the img of the card */
for (let i = 0; i < arrCards.length; i++) {
    $(cardFace[getRandom()]).attr('src',arrCards[i])
}

/* main flip method */
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
            if((($(firstCard).find("img")[0].src) === ($(secondCard).find("img")[0].src) )&&(firstCard !== secondCard)){
                audioCorrect.play();
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
                setTimeout(() => {
                    firstCard.classList.toggle('flip');
                    secondCard.classList.toggle('flip');
                    audioFlip.play();
                    allow=true;
                },1000)
                
            }
            progCount[0].innerHTML=(((correct/(cards.length/2))*100)+'%')
            prog.css( "width",((correct/(cards.length/2))*100)+'%' )
        }else{
            opened=true;
            active=true;
            firstCard=this;
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
}


if(started){
    allow=false;
    (cards).addClass('flip')
    let str = setInterval(function(){
    (cards).removeClass('flip')
    clearInterval(str);
    allow=true;
}, 1500);

started=false;
}


cards.on("click",flip)// flip the card when clicked


/* redirect to main page when call it */
function Redirect() {
    window.location.href = "main.html";
}

/* count down the seconds and stop when reach zero */
let inter = setInterval(function(){
    if(timer < 0){
    clearInterval(inter);
    audioTime.play();
    if(confirm("Oops, time's out! \nWanna play again!")){
        //randomArrNum=[];
        location.reload();
    }else
    Redirect();
    }

    timeCount[0].innerHTML=timer;
    timer--
}, 1000);







