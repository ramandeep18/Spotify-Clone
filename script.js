console.log("Welcome to Spotify");
let songIndex=0;
let audioElement=new Audio('./assets/songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

let gif=document.getElementById('gif');
let mastersongname=document.getElementById('mastersongname');
let songItems=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName: "Viva La Vida",filepath:"./assets/songs/1.mp3" , coverPath:"./assets/cover/cover1.jpg"},
    {songName: "Night Changes",filepath:"./assets/songs/2.mp3" , coverPath:"./assets/cover/cover2.jpg"},
    {songName: "I hate u,I love u",filepath:"./assets/songs/3.mp3" , coverPath:"./assets/cover/cover3.jpg"},
    {songName: "Raabta",filepath:"./assets/songs/4.mp3" , coverPath:"./assets/cover/cover4.jpeg"},
    {songName: "Love Story",filepath:"./assets/songs/5.mp3" , coverPath:"./assets/cover/cover5.jpg"},
    {songName: "Right Now",filepath:"./assets/songs/6.mp3" , coverPath:"./assets/cover/cover6.jpeg"},
    {songName: "Woh Din",filepath:"./assets/songs/7.mp3" , coverPath:"./assets/cover/cover7.jpg"},
    {songName: "Jab Tak",filepath:"./assets/songs/8.mp3" , coverPath:"./assets/cover/cover8.jpg"},
]
 songItems.forEach((element,i)=>{
    
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

 }) 

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        
        gif.style.opacity=0;
    }
})
audioElement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value=progress;
})
myProgressBar.addEventListener('change',()=>{
     
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays= ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    
    makeAllPlays();
    
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audioElement.src=`./assets/songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

  })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=7){
        songIndex=0;
    }
    else{
    songIndex+=1;} 
    audioElement.src=`./assets/songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
    songIndex-=1;}
    audioElement.src=`./assets/songs/${songIndex+1}.mp3`;
    mastersongname.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})



