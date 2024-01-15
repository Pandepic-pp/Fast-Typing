const sentence = [
  `a pen is a common writing instrument that applies ink to a surface, usually paper for writing or drawing. early pens such as reed pens, quill pens, dip pens and ruling pens held a small amount of ink on a nib or in a small void or cavity that had to be periodically recharged by dipping the tip of the pen into an inkwell. today, such pens find only a small number of specialized uses`,
  `ballpoint pen dispenses a viscous oil-based ink by means of a small hard sphere, or ball, which rolls over the surface being written on. the ball is held captive in a socket at the tip of the pen with one half exposed and the other half immersed in ink from the pen's reservoir. when the ball rotates, it transfers the ink which wets the ball from the reservoir to the external surface.`
];


let timer = document.body.querySelector('span').textContent;
console.log(timer);
timer = timer.split(' ');
let value = Number(timer[0]);
let counter = 0;
let totalClicks=0;
let dataLabel = sentence[Math.floor(Math.random() * 2)];
const intervalId = setInterval(() => {
  if (value === 0) {
    console.log(counter);
    console.log(dataLabel.length);
    window.location.href = `result.html?counter=${counter}&totalSize=${dataLabel.length}&totalClicks=${totalClicks}`;
    clearInterval(intervalId);
  }
  value--;
  document.body.querySelector('span').textContent = String(value) + " " + "sec";
}, 1000);

const readDiv = document.getElementById('readDiv');
const content = document.createElement('p');

let sentenceData = `<span style="background-color:#910A67; color:white">${dataLabel.charAt(0)}</span>` + dataLabel.slice(1);

window.addEventListener('keydown', (e) => {
  totalClicks++;
  if (e.key.toLowerCase() === dataLabel[counter]) {
    console.log(e.key.toLowerCase());
    counter++;
    sentenceData = dataLabel.slice(0, counter) + `<span style="background-color:#910A67; color:white">${dataLabel.charAt(counter)}</span>` + dataLabel.slice(counter + 1);
    content.innerHTML = `${sentenceData}`;
  }
});

content.innerHTML = `${sentenceData}.`;
content.style.fontSize = "28px";
content.style.padding = "1px 20px 0px 20px";
readDiv.appendChild(content);
