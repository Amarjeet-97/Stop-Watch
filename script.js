let [millisecond, second, minute,]=[0,0,0]
let timer= document.querySelector('.mainTime');
let startBtn= document.getElementById('start')
let stopBtn= document.getElementById('stop')
let resetBtn= document.getElementById('reset')
let timerId= null;
startBtn.addEventListener('click',(event)=>{
    if(timerId!==null){
       clearInterval(timerId);
    }
    timerId= setInterval(updateTime,10);
    
})
stopBtn.addEventListener('click',(event)=>{
    clearInterval(timerId);
})
resetBtn.addEventListener('click',(event)=>{
    millisecond=0;
    second=0;
    minute=0;
    timer.innerHTML='00:00:00'
})

function updateTime(){
    millisecond+=10;
    if(millisecond==1000){
        millisecond=0;
        second++;
    }
    if(second==60){
        second=0;
        minute++;   
    }
    timer.innerHTML=`${minute}: ${second}: ${millisecond}`
}