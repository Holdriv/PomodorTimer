let s=document.querySelector('#seconds'),
    min = document.querySelector("#minutes"),
    stop = document.querySelector('#stop'),
    start = document.querySelector('#start'),
    toggle =document.querySelector('#toggle')
let minStart = 25,
    breakTime = 5,
    seconds = 60,
    minutes = minStart-1,
    breakMinutes = breakTime-1,
    breakCount = 0,
    flag = false;

let timeCount=()=>{
    seconds=seconds-1;
    if(seconds<10){
        s.innerHTML=`0${seconds}`;
    }else{
        s.innerHTML=`${seconds}`
    }
    min.innerHTML=`${minutes}`;
    if(seconds === 0){
        minutes=minutes-1;
        if(minutes===-1){
            if(breakCount%2===0){
                minutes=breakMinutes;
                breakCount++;
            }else{
                minutes = minStart-1;
                breakCount++;
            }
        }
        seconds=60;
    }
} 
let timer ;


stop.addEventListener('click', (e)=>{
    e.preventDefault;
    if(flag==true){
        clearInterval(timer)
        flag=false;
        console.log(flag)
    }
})
start.addEventListener('click', (e)=>{
    e.preventDefault;
    if(flag==false){
        timer = setInterval(timeCount, 1000)
        flag=true;
        console.log(flag)
    }
})

toggle.addEventListener('click', (e)=>{
    e.preventDefault;
    if(flag==true){
        clearInterval(timer)
        flag=false;
        toggle.classList.add('red')
        toggle.classList.remove('green')
    }else if(flag==false){
        timer = setInterval(timeCount, 1000)
        flag=true
        toggle.classList.add('green')
        toggle.classList.remove('red')
    }
})