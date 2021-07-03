'use strict'
const start=document.querySelector('.item-1');
const container1=document.querySelector('.container-1');
const container2=document.querySelector('.container-2');
const stop=document.querySelector('.item-2');
const reset=document.querySelector('.item-3');
const time=document.querySelector('.time');
let currentTime=0;
let stime;
let interval;
let flag=0;
let hours=0;
let minutes=0;
let seconds=0;
const calTime=function()
{
    console.log(currentTime);
    hours=0;
    minutes=0;
    seconds=0;
    interval=setInterval(()=> {
        currentTime++;
    hours=Math.floor(currentTime/3600);
    minutes=Math.floor((currentTime%3600)/60);
    seconds=Math.floor((currentTime%3600)%60);
    stime=`${String(hours).padStart(2,0)} : ${String(minutes).padStart(2,0)} : ${String(seconds).padStart(2,0)}`;
        time.textContent=stime;
    console.log(stime);

    }
    ,1000);

}
start.addEventListener('click',function(e)
{ 
    e.preventDefault();
    if(flag==0) {

    container1.classList.remove('bg-2');
    container1.classList.remove('bg-3');
    container1.classList.add('bg-1');
    container2.classList.remove('bg-2');
    container2.classList.remove('bg-3');
    container2.classList.add('bg-1');
    flag=1;
    calTime();
    }

})

stop.addEventListener('click',function(e)
{
    e.preventDefault();
    if(flag==1) {
    container1.classList.remove('bg-1');
    container1.classList.remove('bg-3');
    container1.classList.add('bg-2');
    container2.classList.remove('bg-1');
    container2.classList.remove('bg-3');
    container2.classList.add('bg-2');

    flag=0; 
    clearInterval(interval);
    }
})


reset.addEventListener('click',function(e)
{
    e.preventDefault();
    container1.classList.remove('bg-1');
    container1.classList.remove('bg-2');
    container1.classList.add('bg-3');
    container2.classList.remove('bg-1');
    container2.classList.remove('bg-2');
    container2.classList.add('bg-3');
    clearInterval(interval);
    if(stime) {
    const history=document.createElement('div');
    history.setAttribute("data-content",stime);
    history.classList.add('box');
    history.textContent=`${new Date()}`;
    container2.append(history);
    }
    currentTime=0;
    time.textContent="00 : 00 : 00";
    stime=undefined;
    flag=0;
})
