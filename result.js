const urlParams = new URLSearchParams(window.location.search);
const counter = urlParams.get('counter');
const totalSize = urlParams.get('totalSize');
const wordsClick=urlParams.get('totalClicks')
console.log(wordsClick,counter);
const timeInSeconds = 30;  
const speed = (counter / totalSize) * 60 / (timeInSeconds / 60);

const speedPara = document.createElement('p');
const accuracyPara = document.createElement('p')
const speedAccuracyContainer = document.createElement("div")
const card = document.createElement("div");
card.classList.add("card");
const container = document.getElementById("container");
speedAccuracyContainer.classList.add("speed-accuracy-container");
speedPara.innerHTML =  `Your speed: ${speed.toFixed(2)} words per minute`;
accuracyPara.innerHTML=`Your accuracy is: ${Math.round(counter/wordsClick*100)} %`;
card.appendChild(speedPara);
card.appendChild(accuracyPara);
speedAccuracyContainer.appendChild(card);
container.appendChild(speedAccuracyContainer);

