console.log("welcome to javascript")
let songIndex=0;
let audioElement=new Audio('1.mp3');

let masterplay=document.getElementById("masterplay");
let myprogressbar=document.getElementById("myprogressbar");
let gif=document.getElementById("gif");
let mastersongname=document.getElementById("mastersongname");
let songitems=Array.from(document.getElementsByClassName("songitem"));
let songs=
[
   {songname: "Afsanay", filepath: "/songs/1.mp3", coverpath:"/Img/S1.jpeg"}, 
   {songname: "Laga reh", filepath: "/songs/2.mp3", coverpath:"/Img/S4.jpg"},
   {songname: "Guman", filepath: "/songs/3.mp3", coverpath:"/Img/S2.jpeg"}, 
   {songname: "Dont mind", filepath: "/songs/4.mp3", coverpath:"/Img/S5.jpg"}, 
   {songname: "Bansdish", filepath: "/songs/5.mp3", coverpath:"/Img/S3.jpeg"},
   {songname: "Benz", filepath: "/songs/6.mp3", coverpath:"/Img/cover1.jpg"}, 
]

songitems.forEach((element,i)=>{
element.getElementsByTagName("img")[0].src = songs[i].coverpath;
element.getElementsByClassName("songname")[0].innerText = songs[i].songname;
})


masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        masterplay.classList.remove("fa-circle-play");
          masterplay.classList.add("fa-circle-pause");
          gif.style.opacity=1;
    }
    else{
    audioElement.pause();
    masterplay.classList.remove("fa-circle-pause");
    masterplay.classList.add("fa-circle-play");
    gif.style.opacity=0;
    }
    
})

audioElement.addEventListener('timeupdate',()=>{
  progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  console.log(progress);
myprogressbar.value = progress;
})

myprogressbar.addEventListener('change',()=>
{
    audioElement.currentTime=(myprogressbar.value * audioElement.duration/100);
}) 
const makeallplays=()=>{
  Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
element.classList.remove("fa-circle-pause");
element.classList.add("fa-circle-play");
  })
}

Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>
{
     element.addEventListener('click',(e)=>
  {
     makeallplays();
     songIndex=parseInt(e.target.id);
     e.target.classList.remove("fa-circle-play");   
     e.target.classList.add("fa-circle-pause");
     mastersongname.innerText=songs[songIndex].songname;
     audioElement.src=`${songIndex+1}.mp3`;
     audioElement.currentTime=0;
     audioElement.play();
     gif.style.opacity=1;
     masterplay.classList.remove("fa-circle-play");
     masterplay.classList.add("fa-circle-pause");
    })
 })

 document.getElementById('next').addEventListener('click',()=>
 {
  if(songIndex>=9)
  {
    songIndex=0;
  }
  else
  {
    songIndex +=1;
  }
  audioElement.src=`${songIndex+1}.mp3`;
  mastersongname.innerText=songs[songIndex].songname;
  audioElement.currentTime=0;
  audioElement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
 })


 document.getElementById('previous').addEventListener('click',()=>
 {
  if(songIndex<=0)
  {
    songIndex=0;
  }
  else
  {
    songIndex -=1;
  }
  audioElement.src=`${songIndex+1}.mp3`;
  mastersongname.innerText=songs[songIndex].songname;
  audioElement.currentTime=0;
  audioElement.play();
  masterplay.classList.remove("fa-circle-play");
  masterplay.classList.add("fa-circle-pause");
 })
