var secondHand = document.querySelector('.second-hand');
var minsHand = document.querySelector('.min-hand')
var hourHand = document.querySelector('.hour-hand')

  console.log(secondHand)
  
  function setDate(){
    var now = new Date(); 
    var seconds = now.getSeconds();
    var secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      var mins = now.getMinutes();
      var minDregrees = ((mins / 60) * 360) + 90;
      minsHand.style.transform = `rotate(${minDregrees}deg)`; 
    

      var hour = now.getHours();
      var  hourDegrees = ((hour / 12) * 360) + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  }
  
  setInterval(setDate, 1000);