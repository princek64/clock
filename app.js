const secondHand = document.querySelector('.sec-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

const hand = document.querySelector('.hand')


function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secDegrees = ((seconds / 60) * 360 + 90);
    secondHand.style.transform = `rotate(${secDegrees}deg)`
    
    const minutes = now.getMinutes();
    const minDegrees = ((minutes / 60) * 360 + 90);
    minuteHand.style.transform = `rotate(${minDegrees}deg)`

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360 + 90);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
}


setInterval(setDate, 1000);
