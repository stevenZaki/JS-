const sHand = document.querySelector('.S-hand');
const mHand = document.querySelector('.M-hand');
const hHand = document.querySelector('.H-hand');



function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60 ) * 360) + 90;
    sHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360 ) + ((seconds/60)*6) + 90;
    mHand.style.transform = `rotate(${minutesDegrees}deg)`
    
    const hour = now.getHours(); 
    const hourDegree = ((hour / 12) * 360) + ((minutes/60)*30) + 90;
    hHand.style.transform = `rotate(${hourDegree}deg)`

    console.log(seconds);
}
setInterval(setDate, 1000);

setDate();