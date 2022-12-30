const hour=document.getElementById('hours');
const minute=document.getElementById('minutes');
const second=document.getElementById('seconds');
const meridianSlot=document.getElementsByClassName('meridian');
const clock=setInterval(function time(){
  let dateToday =new Date();
let hr=dateToday.getHours();
let min=dateToday.getMinutes();
let sec=dateToday.getSeconds();
let meridian;
if(hr>12){
    meridian="PM"
    hr-=12;
}else{
    meridian="AM"
}

if(hr<10){
hr='0'+hr;
}
if(min<10){
    min='0'+min;
}
if(sec<10){
    sec='0'+sec;
}
    hours.innerHTML=hr;
minutes.innerHTML=min;
seconds.innerHTML=sec;
meridianSlot[0].innerHTML=meridian;
},1000);

  let time = new Date();
   h= time.getHours();
     let greeting;
   let user=document.getElementById('girlimg');
    if (h > 12 && h <=16 ) {
        
        greeting=`<img src="./lunchimage.png">`;
        user.innerHTML=greeting
        document.getElementById("wakeup").innerText = "Good Afternoon !! Take Some Sleep "
        document.getElementById("greeting").innerText = "Let's Have Some Lunch !! "
    
       
    }
  
    else if (h> 16 && h <=20) {
        greeting=`<img src="./tea.png">`;
        user.innerHTML=greeting
        document.getElementById("wakeup").innerText = "Good Evening !! "
        document.getElementById("greeting").innerText = "Stop Yawning, Get Some Tea.. It's Just Evening  !! "
        
    }
    else if (h> 20 && h<=24 ) {
        greeting=`<img src="./sleep.jpg">`;
        user.innerHTML=greeting
        document.getElementById("wakeup").innerText = "Good Night !! "
             document.getElementById("greeting").innerText = "Close Your Eyes and Go to Sleep !! "
           
            }
   const a= document.querySelectorAll("#wakeup")
    const b=document.querySelectorAll("#greeting")
      const c=document.querySelectorAll("girlimg")
      function setAlarm(){
      let selectMorningTime = document.getElementById("settime1");
      let selectNoonTime = document.getElementById("settime2");
      let selectEveningTime = document.getElementById("settime2");
      let selectNightTime = document.getElementById("settime3");
    
      let wakeUpTime =
        selectMorningTime.options[selectMorningTime.selectedIndex].value;
      let lunchTime = selectNoonTime.options[selectNoonTime.selectedIndex].value;
      let napTime =
        selectEveningTime.options[selectEveningTime.selectedIndex].value;
      let nightTime = selectNightTime.options[selectNightTime.selectedIndex].value;
    
      selectMorningTime.addEventListener("click", function handleChange(event) {
        wakeUpTime =
          selectMorningTime.options[selectMorningTime.selectedIndex].value;
      });
    
      selectNoonTime.addEventListener("click", function handleChange(event) {
        lunchTime = selectNoonTime.options[selectNoonTime.selectedIndex].value;
      });
      selectEveningTime.addEventListener("click", function handleChange(event) {
        napTime = selectEveningTime.options[selectEveningTime.selectedIndex].value;
      });
      selectNightTime.addEventListener("click", function handleChange(event) {
        nightTime = selectNightTime.options[selectNightTime.selectedIndex].value;
      });
    let setAlarm = document.getElementById("alarmButton");
  
    
  
    const setTimeValues = () => {
   
    document.getElementById("wakeu").innerText = wakeUpTime;
    document.getElementById("lunch").innerText =  lunchTime;
    document.getElementById("nap").innerText =  napTime;
    document.getElementById("night").innerText = nightTime;
}
setTimeValues()
      }
setAlarm()
